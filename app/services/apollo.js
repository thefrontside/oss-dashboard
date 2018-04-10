import ApolloService from "ember-apollo-client/services/apollo";
import { computed } from '@ember/object';
import { setContext } from "apollo-link-context";

export default ApolloService.extend({
  clientOptions: computed(function() {
    return {
      ssrMode: true,
      link: this.get("link"),
      cache: this.get("cache")
    };
  }),

  link: computed(function() {
    let httpLink = this._super(...arguments);
    let token = JSON.parse(window.localStorage.getItem('ember_simple_auth-session')).authenticated.access_token;
    let tokenHeader = `bearer ${token}`;

    // Middleware
    let authMiddleware = setContext(async () => {
      return {
        headers: {
          authorization: tokenHeader
        }
      };
    });

    let authFlowLink = authMiddleware;

    return authFlowLink.concat(httpLink);
  })
});
