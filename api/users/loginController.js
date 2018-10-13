var express = require("express");
var router = express.Router();
var bcrypt = require('bcryptjs');
var dbOptions = require("../db");
const knex = require("knex")(dbOptions);
const jwt = require('jsonwebtoken');

// POST /user/login
function loginUser(req, res) {
    var user = {}; // Object, contains id, email, and password of the user
    var passwordIsCorrect = {}; // Boolean, true if password correct

    // Search user with the email address
    knex('users').select('*').where({ email_address: req.body.email_address })
        .then((rows) => {
            // Compares hashed password with password
            bcrypt.compare(req.body.password, `${rows[0].password}`, function (err, res) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    console.log('BCRYPT COMPARE: ' + res);
                    passwordIsCorrect = res;
                }
            });

            // Creates token and send it as a response
            if (passwordIsCorrect) {
                user = {
                    user_id: `${rows[0].user_id}`,
                    email_address: `${rows[0].email_address}`,
                    password: `${rows[0].password}`
                }
                console.log(user);
                jwt.sign({ user }, 'secretkey', (err, token) => {
                    if(err)
                    {
                        res.status(500).send(err);
                    }
                    else
                    {
                        res.json({
                            token
                        });
                    }
                });
            }
        })
        // else send err
        .catch(function (err) {
            res.status(500).send({
                message: `${err}`
            }) // FOR DEBUGGING ONLY, dont send exact message in prod
            console.log({
                message: `${err}`
            });
        })
}

module.exports = {
    loginUser: loginUser
};