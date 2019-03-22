const knex = require('knex')(require('../db'));
const { updateUser } = require('./accountHelper');

function editUser(req, res) {
  const user = req.body;
  updateUser(user)
    .then(result => res.json({ message: result }))
    .catch(error => res.status(422).send({ message: error }));
}



// Make these functions available to the router
module.exports = {
  editUser,
};