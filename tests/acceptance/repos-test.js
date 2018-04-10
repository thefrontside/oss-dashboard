/* global visit currentURL click */
import { describe, it, beforeEach, afterEach } from 'mocha';
import $ from 'jquery';
import { expect } from 'chai';
import startApp from 'oss-dashboard/tests/helpers/start-app';
import destroyApp from 'oss-dashboard/tests/helpers/destroy-app';
import pretenderRoutes from '../helpers/data-mocking';
import {
  authenticateSession
} from 'oss-dashboard/tests/helpers/ember-simple-auth';
import Pretender from 'pretender';

describe('Acceptance | repos', function() {
  let application;

  beforeEach(function() {
    application = startApp();
    this.server = new Pretender(pretenderRoutes);
  });

  afterEach(function() {
    this.server.shutdown();
    destroyApp(application);
  });

  beforeEach(function() {
    let authenticated = {
      access_token: 'fake_token'
    };

    window.localStorage.setItem('ember_simple_auth-session', JSON.stringify({ authenticated }));

    return authenticateSession(application, {
      authenticated
    });
  });

  describe.only('visiting the repos route', function() {
    beforeEach(function() {
      return visit('/repos');
    });

    it('displays the route', function() {
      expect(currentURL()).to.equal('/repos');
    });

    it('has two repos', function() {
      expect($('.test-repo-link').length).to.equal(2);
    });

    describe('clicking a repo', function() {
      beforeEach(function() {
        return click('.test-repo-link:last-child');
      });

      it('has the repo details', function() {
        expect($('[data-test-repo-pr-title]:first').text()).to.equal('Foo Title');
        expect($('[data-test-repo-pr-author]:first').text()).to.equal('MyFakeUser');
        expect($('[data-test-repo-pr-body]:first').text().trim()).to.equal('lorem');
      });
    });
  });
});
