import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";
import query from "oss-dashboard/gql/queries/repos";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  apollo: service(),

  model() {
    return this.get('apollo').query({ query }).then(data => data.organization);
  }
});
