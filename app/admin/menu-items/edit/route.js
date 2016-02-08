import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveItem(formData) {
      //Need to grab current model
      let menuItem = this.modelFor('admin.menu-items.edit');

      //Set form data on model
      menuItem.setProperties(formData);

      //Save Model then redirect
      menuItem.save().then(() => {
        this.transitionTo('admin.menu-items');
      });
    },
  },
});
