// This is the testing world variables available throughout all tests
// ------------------------------------------------------------------

// Load enviornmental variables (.env file) onto the process.env
// -------------------------------------------------------------
require(`dotenv`).config();
process.title = `testing-suite`;

// Dependencies
// ------------
const {setWorldConstructor} = require(`cucumber`);

// Set world data
// --------------
setWorldConstructor(function(){

  // General data storage
  // --------------------
  this.data = {};

  // Sample data
  // -----------
  this.sampleData = require(`./sample_data`);

  // Local dependencies
  // ------------------
  this.dependencies = require(`../../dependencies`);

  // Local package json
  // ------------------
  this.package = require(`../../package.json`);
});