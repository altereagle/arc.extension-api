// # Arc | Api Server Resources
// ### Get microservice data

// Arc loads resources for finding a microservice
const findMicroservice = require(`./find_microservice`);

// Arc can get microservice data
module.exports = ({paperboy, microservices}) => {
  return (request, response) => {
    // Arc gets the microservice `slug` and `paths` from the request parameters
    const { microservice: microserviceTitleSlug, path } = request.params;

    // Arc gets the `data` to send to the microservice from the request query
    const data = JSON.stringify(request.query);

    // Arc can reply to the response using microservice data it found
    const replyWithMicroserviceData = (microserviceData) => response.send(microserviceData);

    // Arc can get microservice data
    const getMicroserviceData = ({pool, manifest, title}) => {
      return new Promise((resolve, reject) => {
        // **Given** the event microservice data is sent back on it set
        const onEvent    = `${title}`;

        // **And** the triggering event is set
        let triggerEvent = `@${title}`;

        // **And** requests for microservice data that have a `path` but the microservice does not have a path are **rejected**
        if(path && !manifest.paths) return reject(`${title} can't do anything with ${path}`);

        // **And** the triggering event is updated if the path is valid
        if(manifest.paths && manifest.paths.length) {
          const hasPath = manifest.paths.find((manifestPath) => manifestPath === path);
          if(!hasPath && path) return reject(`${title} does not have anything at ${path}`);
          triggerEvent = hasPath && path ? `@${title}/${path}` : triggerEvent;
        }

        // **When** Arc acquires a microservice process from the pool
        pool.acquire()
          .then((microservice) => {
            // **And** Arc releases the microservice into the pool
            pool.release(microservice);

            // **And** Arc creates an event listener to listen for data from the microservice
            const listener = (microserviceResponse) => {
              paperboy.removeListener(onEvent, listener);
              resolve(microserviceResponse);
            };

            // **Then** Paperboy will listen for events from the microservice
            paperboy.on(onEvent, listener)
              .then(() => {
                // **And** Paperboy will send the data to the microservice using the triggering event
                paperboy.trigger(triggerEvent, data);
              })
              .catch(() => {
                // **But** Paperboy will remove the event listener if an error was caught
                paperboy.removeListener(onEvent, listener);
              });
          })

          // **And** Arc will reject requests for data when there are acquisition issues
          .catch(() => {
            reject(`Oops, let someone know there was an acquisition problem, sorry!`);
          });
      });
    };

    // #### Get Microservice Data Using API Resources

    // **Given** Arc finds the microservice to send data to using a microservice slug
    findMicroservice({microservices, microserviceTitleSlug})
      // **When** Arc gets data from the microservice
      .then(getMicroserviceData)

      // **Then** Arc replies to the request
      .then(replyWithMicroserviceData)

      // **But** Arc responds with an error message if there were any issues
      .catch((error) => {
        response.json({error: error.message ? error.message : error});
      });
  };
};