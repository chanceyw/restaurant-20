import PageObject from 'restaurant-20/tests/page-object';
// Destructiuring
// let vistable = PageObject.visitable
// let collection = PageObject.collection
let { visitable, collection, text } = PageObject;

function role(name) {
  return `[data-role=${name}]`;
}

export default PageObject.create({
  visit: visitable('/admin/orders'),

  //adminNav: Edit menu button and view orders button
  //top nav: Edit menu button and view orders button

  orders: collection({
    itemScope: role('order-detail'),

    item: {
      orderItems: collection({
        itemScope: role('order-detail-order-item'),
        item: {
         name: text(role('order-detail-order-item__name')),
         quantity: text(role('order-detail-order-item__quantity')),
         price: text(role('order-detail-order-item__price')),
       },
      }),
      total: PageObject.text(role('order-detail__total')),
    },

  }),

});
