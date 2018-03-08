# oss-dashboard [![CircleCI](https://circleci.com/gh/thefrontside/oss-dashboard.svg?style=svg)](https://circleci.com/gh/thefrontside/oss-dashboard)

Frontside loves open source. We currently have 47 public repos! We try
to contribute & keep up with all of them, but sometimes things can
fall through the crack or be straight up forgotten. This
dashboard aims to create a place where you can see high level
information about Frontside OSS repos collectivly & also have the
ability to drill down into each repo to get more grandular.

We should be able to gauge how "healthy" our repos are and pick the
most important issues by viewing this dashboard.

This dashboard does _not_ aim to replace Github for managing our
repos. We should still organize issues & PRs with Github.

Information I'd like to see (quick notes, feel free to add/edit):

- See all OSS repos Frontside has
- See a dashboard of all our repos that combines this information:
  - Last 5 merged PRs
  - Last 5 open PRs
  - Last 5 opened issues
- Be able to navigate to a repo to display:
  - Last 5 merged PRs
  - Current open PRs
  - Top 5 oldest issues on the repo
  - New not triaged issues
  - The project roadmap
  - Stackoverflow questions related to the project
  - Who is the project champion
  - Current build status?
  - [maybe] the readme

This is very much a WIP. Feel free to contribute!


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd oss-dashboard`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
