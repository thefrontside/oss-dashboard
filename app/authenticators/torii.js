import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import { inject as service } from "@ember/service";
import config from '../config/environment';
import $ from 'jquery';

export default ToriiAuthenticator.extend({
  torii: service(),

  authenticate() {
    const tokenExchangeUri = config.torii.providers['github-oauth2'].tokenExchangeUri;

    return this._super(...arguments).then((data) => {
      return $.ajax(`${tokenExchangeUri}/${data.authorizationCode}`, {
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        contentType: 'application/json'
      }).then((response) => {
        return {
          access_token: response.token,
          provider: data.provider
        };
      });
    });
  }
});
