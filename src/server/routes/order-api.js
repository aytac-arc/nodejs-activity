import uuidv4 from 'uuid/v4';

export default (app) => {
  var orders = [];

  app.get('/api/v1/orders', (req, res) => {
    // Read/Retrieve orders
    res.json({orders: orders});
  });

  app.post('/api/v1/order', (req, res) => {
    var order = {
      order_id: uuidv4(),
      items: req.body.orders,
    };

    // Create order
    orders.push(order);

    res.json({
      message:  `Order# ${order.order_id} created.`
    });
  });

  app.put('/api/v1/order/:id', (req, res) => {
    var orderId = req.params.id;
    var orderItem = req.body.orders;

    // Find order
    var orderData = orders.filter(order => {
      var result = order.order_id === orderId;
      // Update order
      if (order.order_id === orderId) {
          order.items = orderItem;
      }
      return result;
    })[0];

    res.json({
      message:  `Order# ${orderId} updated.`,
    });
  });

  app.delete('/api/v1/order/:id', (req, res) => {
    var orderId = req.params.id;

    // Find order
    var orderData = orders.filter(order => {
      return order.order_id === orderId;
    })[0];

    // Delete order
    orders.splice(orders.indexOf(orderData), 1);

    res.json({
      message: `Order# ${orderId} removed.`
    });
  });

};
