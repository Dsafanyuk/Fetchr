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
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      last_name: req.body.lastName,

    })
    .then((products) => {
      res.status(200);
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
  knex('users')
    .select('*')
    .where('email_address', req.body.email_address)
    .then((users) => {
      if (users.length) {
        res.status(400).send('There is an account already associated with this email address.');
      } 
      else {
              knex('users')
                .where('user_id', req.body.user_id)
                .update({
                   email_address: req.body.emailAddress,
    
                })
                .then((products) => {
                   res.status(307, './login');
                })
                .catch((err) => {
                   res.status(500).send({
                      message: `${err}`,
                   }); // FOR DEBUGGING ONLY, dont json exact message in prod
                console.log(err);
                });
           
        }
      })
      return 0;
        
}

/* Update rn codes*/
function updateroomnumber(req, res){
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      room_num: req.body.roomNumber,

    })
    .then((products) => {
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
  knex('users')
    .where('user_id', req.body.user_id)
    .update({
      phone_number: req.body.phoneNumber,

    })
    .then((products) => {
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
  updateemailaddress,
  updateroomnumber,
  updatephonenumber
};
