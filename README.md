    __________________
    |                |
    |    .:--.'.     |
    |   / |   \ |    |  addapptation llc.
    |   `" __ | |    |
    |    .'.''| |    |  container "image" for microapps on kubernetes
    |   / /   | |_   |  serves as a base rails instance + gems, libs and binaries
    |   \ \._,\ '/   |
    |   `--'  `"     |
    |________________|

# PlatformDev

Addappters (Front-End Micros) Development Environment for Platform 2020

# Guidelines for Gateway

- Addappters must be developed, code reviewed and merged into the master codebase all within GitHub
- GitHub will serve as the Dev environment for Addappters, while Azure will host the Stage and Prod versions
- The atomic purpose of code blocks referred to as Back-End Micros is to ****\_\_\_\_****

# Addappter Bundle version

- initial dispatcher that defines reference dictionary of versioned addappter libraries containing versioned addappter js files is found in the a\_\_global.js file

# Versioning

- use semantic versioning (https://semver.org/) to name addappter bundles defined in a\_\_global.js

# File Structure

- an addappter is an function that takes JSON as a parameter and includes and/or generates the necessary css, html, and helper js functions to acheive the required functionality

# Smoke Tests

- every micro file should have a similarly named .html file containing sample JSON and a reference to the micro .js file.

# Developer Code of Conduct

We, the Product Development Team of Addapptation, intending to be of sound mind and codebase, do abide by the following guidelines:

- We adopt the HTML, CSS and Javascript Style Guidelines referenced at

  - HTML: https://cssguidelin.es/
  - CSS: https://github.com/airbnb/css#oocss-and-bem
  - JS: https://github.com/airbnb/javascript

- All development will take place in a branch off of the master branch. Branch names should include the name of the ticket/issue. Branches intended to fix functionality in Stage or Live should include the phrase "hotfix" in them.
- Pull requests intended to merge development code into master must escalate to a code review of at least one developer, and ideally a developer familiar with that area of the codebase.
- Once notified of a pull request awaiting code review, the reviewer has 24 hours to review or notify developer of inability to review or else be subject to a team-approved consequence. Pull requests taking longer than 24 hours to be approved or rejected will become first priority for entire team.
- Once a pull request is approved, it is the responsibility of the developer to merge into master by first pulling the latest version of master, handling merge conflicts locally and then merging the updated development branch into master. Changing an approved pull request without discussing with the approver is discouraged.
- Stable development master will be pushed to stage master. Any problems discovered in integration or end-to-end testing in the stage environment will result in the attending developer creating a hotfix branch and proceeding, without code review if necessary, to merge a hotfix whose name includes both the term 'hotfix' as well as the likely dev branch linked to the causal problem.

# HTML Best Practices

Use the Semantic Markup approach in which tags denote information design, not visual design.

# CSS Best Practices

Use CSS Grid for all new layout development, and a combination of ID-specific, style block injections and CSS Variables in micro .js to replace SASS.

# JS Best Practices

Use ES6 features wherever possible to optimize performance rather than to compress lines of code. Any approach that takes significantly longer but uses fewer lines of code should be abandoned in favor of approaches that are more performant.
