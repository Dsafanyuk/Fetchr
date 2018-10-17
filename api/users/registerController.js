const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const knex = require('knex')(require('../db'));

// POST /user/register
async function registerUser(req, res) {
  const errors = validationResult(req); // Validation errors, if there is any

  // If errors is not empty, return error messages
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // new user with information from the request
  const newUser = {
    email_address: req.body.email_address,
    password: req.body.password,
    room_num: req.body.room_num,
    phone_number: req.body.phone,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };

  // Auto-gen a salt and hash with given password
  try {
    const generatedHash = await bcrypt.hash(req.body.password, 10);
    // Assign hashed password
    newUser.password = await generatedHash;
  } catch (err) {
    res.status(500).send(err);
  }

  knex('users').select('*').where('email_address', newUser.email_address)
    .then((users) => {
      if (users.length) {
        res.status(400).send('Duplicate entry');
      } else {
        knex('users').insert(newUser)
          // if user successfully inserted
          .then((userId) => {
            // Select the user that was just created
            knex('users').select('*').where('user_id', userId)
              .then(() => {
                res.redirect(307, './login');
              });
          })
          // else send err
          .catch((err) => {
            res.status(500).send({
              message: `${err}`,
            }); // FOR DEBUGGING ONLY, dont send exact message in prod
          });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });

  return 0;
}

module.exports = {
  registerUser,
};