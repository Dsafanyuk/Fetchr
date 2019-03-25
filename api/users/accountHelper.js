const knex = require('knex')(require('../db'));
const Sentry = require ('sentry')

function updateAccount(user) {
  
  return knex('users')
    .where('user_id', user.user_id)
    .update({
      first_name: user.first_name,
      last_name: user.last_name,
      room_num: user.room_num,
      phone_number: user.phone_number,
      
    })
    .then((users) => {
      
      knex('users')
        .select('*')
        .where('email_address', user.email_address)
        .then((users) => {
      
          if (users.length) {
            res.status(400).send({ message: 'There is an account already associated with this email address.' });
          }
          else{
            knex('users')
            .where('user_id', user.user_id)
            .update({
              email_address: user.email_address,
            })
            .then((user_id) => {
                res.status(200).send('user created successfully');
              })
            .catch((err) => {
                Sentry.captureException(err);
                res.status(500).send({
                  message: `${err}`,
                });
            });
          }
        })
    .catch(err => console.log('err'));
   })
}
module.exports = {
  updateAccount,
};