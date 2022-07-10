function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  };
};

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1)
    };
  };
}

function listItems(deliveryOrders) {
  var namedItems = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    namedItems.push(deliveryOrders[i].item);
  }
  return namedItems.join(', ');
};

function searchOrder(deliveryOrders, value) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === value) {
      return true;
    }
  return false;
  }
};

/* I know my searchOrder is close, but I need
to step away and take care of myself for the rest of
today (Sunday, the due date!) - I will review my logic
and make sure I understand my mistake this week! */

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

// // /// // ////

//Brainstom - searchOrder
var order1 = {
  orderNumber: 1234,
  item: "burger",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
};

var order2 = {
  orderNumber: 2342,
  item: "blt sandwich",
  price: "5.99",
  orderType: "delivery",
  status: "accepted"
};

var deliveryOrders = [order1, order2];
for (var i = 0; i < deliveryOrders.length; i++) {
  console.log(deliveryOrders[i].item.includes("burger"));
  console.log(deliveryOrders[i].item)
  // returns two values, only want one
};

console.log("// ")
console.log(searchOrder(deliveryOrders, "blt sandwich"))
console.log("// ")
console.log(deliveryOrders[0].item)

// Brainstorm - listItems
/* var order1 = {
  orderNumber: 1,
  item: "burger",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
};

var order2 = {
  orderNumber: 2,
  item: "blt sandwich",
  price: "5.99",
  orderType: "delivery",
  status: "accepted"
};

var order3 = {
  orderNumber: 3,
  item: "rueben",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
};

var deliveryOrders = [order1, order2, order3];
var namedItems = [];
for (var i = 0; i < deliveryOrders.length; i++) {
  namedItems[i] = deliveryOrders[i].item;
  // console.log(namedItems.join(', '))
  console.log(namedItems.length);
} */
