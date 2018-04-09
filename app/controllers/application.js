import Controller from '@ember/controller';
import config from '../config/environment';

export default Controller.extend({
  config: config.torii.providers['github-oauth2']
});
