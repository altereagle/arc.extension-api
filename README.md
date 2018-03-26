# Arc | API Extension
[![Build Status](https://travis-ci.org/altereagle/arc.extension-api.svg?branch=master)](https://travis-ci.org/altereagle/arc.extension-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/bca08a56abbbfe65bdac/maintainability)](https://codeclimate.com/github/altereagle/arc.extension-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bca08a56abbbfe65bdac/test_coverage)](https://codeclimate.com/github/altereagle/arc.extension-api/test_coverage)

An API service for Arc that allows HTTP traffic to communicate with microservices and an interface to view microservice runtime details.

### Install
```bash
npm install arc.extension-api
```

### Use
```javascript
const arc = require(`arcms`);
const extension = require(`arc.extension-api`);

const options = {
  port: 8080
};

arc.addExtension(extension, options);
```

### What You Get
* An interface to view runtime details and states for the microservices Arc is running at `localhost:8080`
* HTTP endpoints for your microservices.
  * If you had a microservice named "My Microservice", you could now run it using `localhost:8080/my-microservice`
  * You can send also data to using query strings, `localhost:8080/my-microservice?hello=world`

### Additional Information
* Refer to the [Arc Wiki on using extensions](https://github.com/altereagle/arc/wiki/Using-Arc-Extensions).

### File Tree
| JavaScript |
| --- |
| /[index.js]() |
| /support/[authentication.js]() |
| /support/[check_api_options.js]() |
| /support/[create_express_server.js]() |
| /support/[find_microservice.js]() |
| /support/[get_all_miroservice_stats.js]() |
| /support/[get_microservice_data.js]() |
| /support/[get_one_microservice_stats.js]() |
| /support/[listen_to_requests.js]() |
| /support/[render_template.js]() |
| /support/[usage_reporter.js]() |