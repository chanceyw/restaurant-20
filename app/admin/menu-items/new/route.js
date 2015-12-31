import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addItem(formData) {
      //Need to grab current model
      let menuItem = this.store.createRecord('menu-item');

      //Set form data on model
      menuItem.setProperties(formData);

      //Save Model then redirect
      menuItem.save().then(() => {
        this.transitionTo('admin.menu-items');
      })
    }
  }
});
