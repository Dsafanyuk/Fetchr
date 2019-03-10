const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../db'));

/* Update first name update codes*/
function updatefirstname(req, res){
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      first_name: req.body.firstName,

    })
    .then((users) => {
      res.status(200);
      // res.cookie("first_name", req.body.firstName, { maxAge: 24*60*60*1000 });
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont json exact message in prod
      console.log(err);
    })
}

/* Update last name update codes*/
function updatelastname(req, res){
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      last_name: req.body.lastName,

    })
    .then((users) => {
      res.status(200);
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont json exact message in prod
      console.log(err);
    })
}

/* Update room number updatecodes*/
function updateroomnumber(req, res){
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      room_num: req.body.roomNumber,

    })
    .then((users) => {
      res.status(200);
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      });
      console.log(err);
    })
}

/* Update phone number name update codes*/
function updatephonenumber(req, res){
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      phone_number: req.body.phoneNumber,

    })
    .then((users) => {
      res.status(200);
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      });
      console.log(err);
    })
}

module.exports = {
  updatefirstname,
  updatelastname,
  updateroomnumber,
  updatephonenumber
};
