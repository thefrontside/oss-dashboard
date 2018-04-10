import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('repos', function() {
    this.route('repo', { path: ':name' });
  });
  this.route('login');
});

export default Router;
