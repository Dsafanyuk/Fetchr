var express = require("express");
var router = express.Router();
const { validationResult } = require('express-validator/check');
var bcrypt = require('bcryptjs');
var dbOptions = require("../db");
const knex = require("knex")(dbOptions);

// POST /user/register
function registerUser(req, res) {
    const errors = validationResult(req); // Validation errors, if there is any

    // If errors is not empty, return error messages
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // new user with information from the request
    var newUser = {
        email_address: req.body.email_address,
        password: req.body.password,
        room_num: req.body.room_num,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }

    bcrypt.genSalt(10, function (err, salt) {
        if(err) {
            res.status(500).send(err);
        }
        else {
            // Hash the password
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                console.log(`hash is ${hash}`);
                newUser.password = hash;

                knex("users").insert(newUser)
                    // if user successfully inserted
                    .then((user_id) => {
                        // Select the user that was just created
                        knex("users").select('*').where('user_id', user_id)
                            .then((rows) => {
                                res.redirect(307, `./login`)
                            })
                    })
                    // else send err
                    .catch(function (err) {
                        res.status(500).send({
                            message: `${err}`
                        }) // FOR DEBUGGING ONLY, dont send exact message in prod
                    })
            });
        }
    });
}

module.exports = {
    registerUser: registerUser
};