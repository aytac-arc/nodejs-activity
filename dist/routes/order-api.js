'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  var orders = [];

  app.get('/api/v1/orders', function (req, res) {
    // Read/Retrieve orders
    res.json({ orders: orders });
  });

  app.post('/api/v1/order', function (req, res) {
    var order = {
      order_id: (0, _v2.default)(),
      items: req.body.orders
    };

    // Create order
    orders.push(order);

    res.json({
      message: 'Order# ' + order.order_id + ' created.'
    });
  });

  app.put('/api/v1/order/:id', function (req, res) {
    var orderId = req.params.id;
    var orderItem = req.body.orders;

    // Find order
    var orderData = orders.filter(function (order) {
      var result = order.order_id === orderId;
      // Update order
      if (order.order_id === orderId) {
        order.items = orderItem;
      }
      return result;
    })[0];

    res.json({
      message: 'Order# ' + orderId + ' updated.'
    });
  });

  app.delete('/api/v1/order/:id', function (req, res) {
    var orderId = req.params.id;

    // Find order
    var orderData = orders.filter(function (order) {
      return order.order_id === orderId;
    })[0];

    // Delete order
    orders.splice(orders.indexOf(orderData), 1);

    res.json({
      message: 'Order# ' + orderId + ' removed.'
    });
  });
};