const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../db'));

/* Update phone number name update codes*/
function updateInfo(req, res){
  switch(req.body.fieldname) {
    // Firstname 
    case  "first_name": 
    knex('users')
    .where('user_id', req.body.user_id)
    .update({
      first_name: req.body.data,

    })
    .then((users) => {
      res.status(200); // res.cookie
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      });
      console.log(err);
    })
    break 

    //last name
    case  "last_name": 
    knex('users')
    .where('user_id', req.body.user_id)
    .update({
      last_name: req.body.data,

    })
    .then((users) => {
      res.status(200); // res.cookie
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      });
      console.log(err);
    })
    break

    // Room number
    case  "room_num": 
    knex('users')
    .where('user_id', req.body.user_id)
    .update({
      room_num: req.body.data,

    })
    .then((users) => {
      res.status(200); // res.cookie
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      });
      console.log(err);
    })
    break

    // Phone number
    case  "phone_number": 
    knex('users')
    .where('user_id', req.body.user_id)
    .update({
      phone_number: req.body.data,

    })
    .then((users) => {
      res.status(200); // res.cookie
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      });
      console.log(err);
    })
    break


    default :
    console.log("Yoooo")
  }
}

module.exports = {
  updateInfo,
};
