let express = require('express');

let router = express.Router();
const accountController = require('./AccountController');

router.post('/updatefirstname', accountController.updatefirstname);
router.post('/updatelastname', accountController.updatelastname);
router.post('/updateemailaddress', accountController.updateemailaddress);
router.post('/updateroomnumber', accountController.updateroomnumber);
router.post('/updatephonenumber', accountController.updatephonenumber);

module.exports = router;
