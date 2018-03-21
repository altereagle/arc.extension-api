// # Arc API | Dependencies
// ### Arc API needs on these modules to operate

// Arc API loads these dependencies when it starts
module.exports = {
  
  // Arc API uses [mustache](https://github.com/janl/mustache.js)
  mustache               : require(`mustache`),
  
  // Arc API uses [dotenv](https://github.com/motdotla/dotenv)
  dotenv                 : require(`dotenv`),
  
  // Arc API uses [express](https://expressjs.com/)
  express                : require(`express`),
  
  // Arc API uses [morgan](https://github.com/expressjs/morgan)
  morgan                 : require(`morgan`),
  
  // Arc API uses [http](https://nodejs.org/api/http.html) _(native module)_
  http                   : require(`http`),
  
  // Arc API uses [body-parser](https://github.com/expressjs/body-parser)
  'body-parser'          : require(`body-parser`),
  
  // Arc API uses [express-query-boolean](https://github.com/mariusc23/express-query-boolean)
  'express-query-boolean': require(`express-query-boolean`),
  
  // Arc API uses [express-query-int](https://github.com/mariusc23/express-query-int)
  'express-query-int'    : require(`express-query-int`),
  
  // Arc API uses [express-query-date](https://github.com/mariusc23/express-query-date)
  'express-query-date'   : require(`express-query-date`),
  
  // Arc API uses [user-agent-parser](https://www.npmjs.com/package/ua-parser-js)
  'user-agent-parser'    : require(`user-agent-parser`)
};