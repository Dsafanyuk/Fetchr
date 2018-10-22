const knex = require('knex')(require('../db'));

// GET /user
function showAllUsers(req, res) {
  knex('users').select('*')
    .then((rows) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

// GET /user/{id}
function showOneUser(req, res) {
  // Check user id with value at the parameter
  if (req.token.user.user_id === req.params.user_id) {
    knex('users').select('*').where('user_id', req.params.user_id)
      .then((rows) => {
        res.send(rows).status(200);
      })
      .catch((err) => {
        res.status(500).send({
          message: `${err}`,
        });
      });
  } else {
    res.status(403).send('Unauthorized');
  }
}
// GET /user/{id}/orders
function showUserOrders(req, res) {
  knex('orders').select('*').where('customer_id', req.params.user_id)
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

// GET /user/login
function showLogin(req, res) {
  res.send(`Welcome to the login page user: ${req.query.email}`);
}

// POST /user
function createUser(req, res) {
  const request = req.body;
  console.log(request);
  knex('users').insert(request)
    // if user successfully inserted
    .then((user_id) => {
      // Select the user that was just created
      knex('users').select('*').where('user_id', user_id)
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


// UPDATE /user/{id}
function updateUser(req, res) {
  res.send('update user');
}

// DELETE /user/{id}
//TODO primary key error
//********************* */
/* Unhandled rejection Error: ER_ROW_IS_REFERENCED_2:
 Cannot delete or update a parent row: a foreign key constraint fails
 (`fetchr_db`.`orders`, CONSTRAINT `courier_fk`
 FOREIGN KEY (`courier_id`)
 REFERENCES `users` (`user_id`))
*/

// Should we just have a 'deactivate account' option instead of a straight up delete?
function deleteUser(req, res) {
  knex('users').where('user_id', req.params.user_id).del()
    .then(() => {
      res.send('success').status(202);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont send exact message in prod
    });
}

module.exports = {
  showAllUsers: showAllUsers,
  showOneUser: showOneUser,
  showUserOrders: showUserOrders,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  showLogin: showLogin,
};
