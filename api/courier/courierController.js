const knex = require('knex')(require('../db'));

// GET /order
function showCourierOrders(req, res) {
  knex('orders').innerJoin('users', 'orders.customer_id', 'users.user_id')
    .select(
      'order_id',
      'first_name',
      'room_num',
      'delivery_status',
      'orders.time_created',
      'order_total',
    )
    .whereNull('courier_id')
    .whereNot('customer_id', req.params.user_id)
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
      console.log(err);
    });
}

// GET /order
function acceptedOrders(req, res) {
  knex('orders').innerJoin('users', 'orders.customer_id', 'users.user_id')
    .select(
      'order_id',
      'first_name',
      'room_num',
      'delivery_status',
      'time_delivered',
      'orders.time_created',
      'order_total',
    )
    .where('courier_id', req.params.user_id)
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
      console.log(err);
    });
}

// POST 
function acceptOrder(req, res) {
  knex('orders')
    .whereNull('courier_id')
    .andWhere('order_id', req.body.order_id)
    .update({
      delivery_status: 'in progress',
      courier_id: req.body.courier_id,
    })
    .then((rows) => {
      if (rows == 1) {
        res.send("success");
      }
      else {
        res.send("fail");
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
      console.log(err);
    });
}
module.exports = {
  acceptOrder,
  acceptedOrders,
  showCourierOrders,
};
