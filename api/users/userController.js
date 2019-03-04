const knex = require('knex')(require('../db'));

<<<<<<< HEAD
=======
// GET /users
function showAllUsers(req, res) {
  knex('users')
    .select('*')
    .then((rows) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
// GET /users/{user_id}
function showOneUser(req, res) {
  // Check user id with value at the parameter
  if (req.token.user.user_id === req.params.user_id) {
    knex('users')
      .select('*')
      .where('user_id', req.params.user_id)
      .then((rows) => {
        res.send(rows).status(200);
      })
      .catch((err) => {
        res.status(500).send({
          message: `${err}`,
        });
      });
  } else {
    res.status(403).send({ message: 'Unauthorized' });
  }
}
// GET /users/{user_id}/orders
function showUserOrders(req, res) {
  knex('orders')
    .select('*')
    .where('customer_id', req.params.user_id)
<<<<<<< HEAD
    .orderBy('order_id', 'desc')
=======
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

<<<<<<< HEAD
=======
// GET /users/login
function showLogin(req, res) {
  res.send(`Welcome to the login page user: ${req.query.email}`);
}

>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
// POST /user
function createUser(req, res) {
  const request = req.body;

  knex('users')
    .insert(request)
    // if user successfully inserted
    .then((user_id) => {
      // Select the user that was just created
      knex('users')
        .select('*')
        .where('user_id', user_id)
        .then((rows) => {
          res.status(201).send(`User created: ${rows[0].email_address}`);
        });
    })
    // else send err
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

// UPDATE /users/{id}
function updateUser(req, res) {
  res.send('update user');
}

// Returns OK status if user has a CC in our system
function creditCheck(req, res) {
  knex('users_cc')
    .count('user_id as numberOfCards')
    .where('user_id', req.params.user_id)
    .then((userCCRows) => {
      if (userCCRows[0].numberOfCards) {
        res.send(200).status(200);
      } else {
        res.send(204).status(204);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact error message in prod
    });
}

// POST /users/favorite
// send in request body { "user_id": {their user id}, "product_id": {the product id} }
function favorite(req, res) {
  knex('favorites')
    .insert({
      user_id: req.body.user_id,
      product_id: req.body.product_id,
    })
    .then(() => {
<<<<<<< HEAD
      res.status(200);
=======
      res.send(200).status(200);
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact error message in prod
    });
}

// DELETE /users/unfavorite
// send in request body { "user_id": {their user id}, "product_id": {the product id} }
function unfavorite(req, res) {
  if (!req.body.user_id || !req.body.product_id) {
    res.status(400).send('missing info');
  } else {
    knex('favorites')
      .where({
        user_id: req.body.user_id,
        product_id: req.body.product_id,
      })
      .del()
      .then(() => {
        res.send(200).status(200);
      })
      .catch((err) => {
        res.status(500).send({
          message: `${err}`,
        }); // FOR DEBUGGING ONLY, dont send exact error message in prod
      });
  }
}

// GET /users/{user_id}/favorites
function favorites(req, res) {
  knex('favorites')
    .select('*')
    .where('user_id', req.params.user_id)
    .innerJoin('products', 'products.product_id', 'favorites.product_id')
    .then((favorites) => {
      res.send(favorites).status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}
<<<<<<< HEAD
// POST /users/:user_id/wallet
function addBalance(req,res){
  knex('users')
  .where('user_id', req.params.user_id)
  .increment(
    'wallet',req.body.amount)
  .then(()=>{
    res.send('success').status(200)
  })
  .catch((err)=>{
    res.status(500).send({
      message: `${err}`
    })
  })
}

// GET /users/{user_id}/wallet
function checkBalance(req, res) {
  knex('users').select('wallet')
    .where('user_id', req.params.user_id)
    .then((balance) => {
      res.send(balance).status(200)
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`
      })
    })
}
module.exports = {
=======

module.exports = {
  showAllUsers,
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
  showOneUser,
  showUserOrders,
  createUser,
  updateUser,
<<<<<<< HEAD
=======
  showLogin,
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
  creditCheck,
  favorite,
  favorites,
  unfavorite,
<<<<<<< HEAD
  addBalance,
  checkBalance
=======
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
};
