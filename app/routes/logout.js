import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),

  activate() {
    this.get('session').invalidate().then(() => this.transitionTo('index'));
  }
});
