const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../db'));
module.exports = {
  updatefirstname,

};
/* Update fn codes*/
function updatefirstname(req, res){
  console.log(req.body.user_id, req.body.firstName)
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      first_name: req.body.firstName,

    })
    .then((products) => {
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
  console.log(req.body.user_id, req.body.lastName)
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      last_name: req.body.lastName,

    })
    .then((products) => {
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

/* Update ea codes*/
function updateemailaddress(req, res){
  console.log(req.body.user_id, req.body.emailAddress)
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      email_address: req.body.emailAddress,

    })
    .then((products) => {
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

/* Update rn codes*/
function updateroomnumber(req, res){
  console.log(req.body.user_id, req.body.roomNumber)
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      room_num: req.body.roomNumber,

    })
    .then((products) => {
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

/* Update pn codes*/
function updatephonenumber(req, res){
  console.log(req.body.user_id, req.body.phoneNumber)
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      phone_number: req.body.phoneNumber,

    })
    .then((products) => {
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
