const { validationResult } = require('express-validator/check');
const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../db'));

/* Update fn codes*/
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

/* Update ln codes*/
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

/* Update rn codes*/
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
      }); // FOR DEBUGGING ONLY, dont json exact message in prod
      console.log(err);
    })
}

/* Update pn codes*/
function updatephonenumber(req, res){
  const errors = validationResult(req); // Validation errors, if there is any
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
      }); // FOR DEBUGGING ONLY, dont json exact message in prod
      console.log(err);
    })
}

module.exports = {
  updatefirstname,
  updatelastname,
  updateroomnumber,
  updatephonenumber
};
