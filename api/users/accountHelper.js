const knex = require('knex')(require('../db'));

function updateAccount(user) {
  
  return knex('users')
    .where('user_id', user.user_id)
    .update({
      first_name: user.first_name,
      last_name: user.last_name,
      room_num: user.room_num,
      phone_number: user.phone_number,
    })
    .then(async (users) => {
      knex('users')
        .select('*')
        .where('email_address', user.email_address)
        .then((users) => {
          if(!(users.length)){
            knex('users')
            .where('user_id', user.user_id)
            .update({
              email_address: user.email_address,
            })
            .then(success => console.log('successful update').status(200))
            .catch(err => console.log(user));
          }
          else
          {
            console.log('There is an account already associated with this email address')
            
          }
          
        })
    .catch(err => console.log('err'));
   })
  }
module.exports = {
  updateAccount,
};