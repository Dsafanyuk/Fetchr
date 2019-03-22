const knex = require('knex')(require('../db'));

function updateUser(user) {

  return knex('users')
    .where('user_id', user.user_id)
    .update({
      first_name: user.first_name,
      last_name: user.last_name,
      room_num: user.room_num,
      phone_number: user.phone_number,
    })
    .then(success => console.log('success'))
    .catch(err => console.log('err'));
}

module.exports = {
  updateUser,
};