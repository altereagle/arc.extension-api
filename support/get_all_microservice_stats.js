// # Arc | Api Server Resources
// ### Get microservice stats

// Arc can get the stats for all available microservices
module.exports = ({ microservices }) => {
  return (request, response) => {
    let microserviceStats = {};

    microservices.forEach(({manifest, title}) => {
      // Arc adds a description of the microservice by the title of the microservice
      microserviceStats[title] = manifest.description || `I have no idea what this does.`;
    });

    // Arc returns the microservice stats
    response.json(microserviceStats);
  };
};