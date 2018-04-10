/* global visit currentURL */
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'oss-dashboard/tests/helpers/start-app';
import destroyApp from 'oss-dashboard/tests/helpers/destroy-app';
import pretenderRoutes from '../helpers/data-mocking';
import {
  authenticateSession
} from 'oss-dashboard/tests/helpers/ember-simple-auth';
import Pretender from 'pretender';

describe('Acceptance | authentication', function() {
  let application;

  beforeEach(function() {
    application = startApp();
    this.server = new Pretender(pretenderRoutes);
  });

  afterEach(function() {
    this.server.shutdown();
    destroyApp(application);
  });

  describe('logged in', function() {
    beforeEach(function() {
      let authenticated = {
        access_token: 'fake_token'
      };

      window.localStorage.setItem('ember_simple_auth-session', JSON.stringify({ authenticated }));

      return authenticateSession(application, {
        authenticated
      });
    });

    describe('visiting the repos route', function() {
      beforeEach(function() {
        return visit('/repos');
      });

      it('displays the route', function() {
        expect(currentURL()).to.equal('/repos');
      });
    });
  });

  describe('logged out', function() {
    describe('visiting the repos route', function() {
      beforeEach(function() {
        return visit('/repos');
      });

      it('redirects to the login route', function() {
        expect(currentURL()).to.equal('/login');
      });
    });
  });
});
