Feature: The system has modules/libraries it depends on to do things

  In order to insure that the systems services will run
  The system should check if dependencies are installed

  Scenario: The system needs to use a resource installed with NPM
    Given the system has dependencies
    Then the system has the dependency mustache installed
      And the system has the dependency dotenv installed
      And the system has the dependency express installed
      And the system has the dependency morgan installed
      And the system has the dependency body-parser installed
      And the system has the dependency express-query-boolean installed
      And the system has the dependency express-query-int installed
      And the system has the dependency express-query-date installed
      And the system has the dependency user-agent-parser installed
      And the system has the development dependency chai included in the package
      And the system has the development dependency cucumber included in the package
      And the system has the development dependency mocha included in the package
      And the system has the development dependency nodemon included in the package