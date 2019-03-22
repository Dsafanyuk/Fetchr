const express = require('express');

const router = express.Router();
const accountController = require('./accountController');

router.post('/:user_id/update', accountController.editUser);

module.exports = router;