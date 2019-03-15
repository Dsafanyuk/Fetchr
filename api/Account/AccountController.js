const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../db'));

// Update the user info depending on wht is selected 
function updateInfo(req, res){
  switch(req.body.fieldName) {
    // These lines update the user Firstname 
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

    // These lines update the user last name
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

    // These lines update the user room number
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

    // These lines update the user phone number
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
  }
}

module.exports = {
  updateInfo,
};