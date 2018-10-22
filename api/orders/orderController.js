const knex = require('knex')(require('../db'));

// GET /order
function showAllOrders(req, res) {
  knex('orders').select('*')
    .then((rows) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

// GET /order/{id}
function showOneOrder(req, res) {
  knex('orders').where('order_id', req.params.order_id)
    .then((rows) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

// POST /order
function createOrder(req, res) {
  const request = req.body;
  knex('orders').insert(request)
    // if order successfully inserted
    .then(() => {
      // Select the order that was just created
      knex('orders').select('*').where('order_id', order_id)
        .then((rows) => {
          res.status(201).send(`Order created for id ${rows[0].order_id}`);
        });
    })
    // else send err
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

// UPDATE /order{id}
function updateOrder(req, res) {
  res.send('update order');
}

// DELETE /order/{id}
function deleteOrder(req, res) {
  knex("orders").where('order_id', req.params.order_id).del()
    .then((rows) => {
      res.send('success').status(202);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

module.exports = {
  showAllOrders: showAllOrders,
  showOneOrder: showOneOrder,
  createOrder: createOrder,
  updateOrder: updateOrder,
  deleteOrder: deleteOrder,
};
