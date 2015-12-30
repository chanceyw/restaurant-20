import DS from 'ember-data';
import config from 'restaurant-20/config/environment';

export default DS.RESTAdapter.extend({
  host: config.apiHost,

  namespace: 'api',
});
