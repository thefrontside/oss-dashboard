'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'oss-dashboard',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    apollo: {
      apiURL: 'https://api.github.com/graphql'
    },

    fastboot: {
      hostWhitelist: [
        'oss.frontside.io',
          /^localhost:\d+$/,
          /^fs-oss-dashboard-pr-\d+.herokuapp.com/
      ]
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'repo user read:org'
        }
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.torii.providers['github-oauth2'].apiKey = process.env.GITHUB_DEV_CLIENT_ID;
    ENV.torii.providers['github-oauth2'].redirectUri = 'http://localhost:4200/torii/redirect.html';
    ENV.torii.providers['github-oauth2'].tokenExchangeUri = process.env.TOKEN_EXCHANGE_URL;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.torii.providers['github-oauth2'].apiKey = process.env.GITHUB_DEV_CLIENT_ID;
    ENV.torii.providers['github-oauth2'].redirectUri = 'http://oss.frontside.io/torii/redirect.html';
    ENV.torii.providers['github-oauth2'].tokenExchangeUri = process.env.TOKEN_EXCHANGE_URL;
    // here you can enable a production-specific feature
  }

  return ENV;
};
