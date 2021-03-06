import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";
import query from "oss-dashboard/gql/queries/repo";

export default Route.extend({
  apollo: service(),

  title: function() {
    return `${this.currentModel.name} | OSS Dashboard`;
  },

  model({ name }) {
    let variables = { name };

    return this.get('apollo').query({ query,  variables })
      .then(data => data.organization.repository);
  }
});
