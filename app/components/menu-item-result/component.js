import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  cart: Ember.inject.service(),

  actions: {
    addToCart(menuItem) {
      this.get('cart').addItem(menuItem);
    }
  },
});
