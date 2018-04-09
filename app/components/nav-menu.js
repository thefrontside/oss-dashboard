import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  isActive: false,

  actions: {
    toggleActive() {
      let isActive = this.get('isActive');

      isActive ? this.set('isActive', false) : this.set('isActive', true);
    }
  }
});
