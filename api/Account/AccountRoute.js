const express = require('express');
const router = express.Router();

const accountController = require('./AccountController');

router.post('/updateInfo', accountController.updateInfo);


module.exports = router;