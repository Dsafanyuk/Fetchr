const express = require('express');
const { check } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const userController = require('./userController');
const registerController = require('./registerController');
const loginController = require('./loginController');
<<<<<<< HEAD
const verifyToken = require('../routes/verifyToken');
=======
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f

const router = express.Router({
  mergeParams: true,
}); // don't forget the parent params!

router.post('/register', [
  check('email_address', 'Not an email address').isEmail().trim(),
  check('password', 'Password must have at least one lowercase, one uppercase, a number,  and a minimum of 8 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/, 'i').trim(),
  check('phone', 'Only digits').isMobilePhone().trim(),
  check('room_num', 'Please enter 4 digits, no more no less').isLength({
    min: 4,
    max: 4,
  }).isNumeric().trim(),
  check('first_name', 'Cannot have numbers').isAlpha().trim(),
  check('last_name', 'Cannot have numbers').isAlpha().trim(),
], registerController.registerUser);

<<<<<<< HEAD
router.post('/:user_id/wallet', verifyToken, userController.addBalance);

router.get('/:user_id/wallet', verifyToken, userController.checkBalance);

router.post('/favorite', verifyToken, userController.favorite);

router.post('/unfavorite', verifyToken, userController.unfavorite);

router.get('/:user_id/favorites', verifyToken, userController.favorites);

router.get('/:user_id/creditCheck',  verifyToken, userController.creditCheck);

router.post('/login', loginController.loginUser);

router.get('/:user_id/',  verifyToken, userController.showOneUser); // eslint-disable-line no-use-before-define

router.get('/:user_id/orders',  verifyToken, userController.showUserOrders);

router.patch('/:user_id',  verifyToken, userController.updateUser);

router.post('/',  verifyToken, userController.createUser);
=======
router.post('/favorite', userController.favorite);

router.post('/unfavorite', userController.unfavorite);

router.get('/:user_id/favorites', userController.favorites);

router.get('/:user_id/creditCheck', userController.creditCheck);

router.post('/login', loginController.loginUser);

router.get('/login', userController.showLogin);

router.get('/', userController.showAllUsers);

router.post('/:user_id/', verifyToken, userController.showOneUser); // eslint-disable-line no-use-before-define

router.get('/:user_id/orders', userController.showUserOrders);

router.patch('/:user_id', userController.updateUser);

router.post('/', userController.createUser);


// IMPORTANT, FORMAT OF TOKEN

// Verify token
function verifyToken(req, res, next) {
  // Get jwt in cookies
  const jwtCookie = req.body.clientToken;

  console.log(jwtCookie);

  // Check if there is cookie
  if (typeof jwtCookie === 'string') {
    // Verifies secret
    jwt.verify(jwtCookie, 'secretkey', (err, decoded) => {
      if (!err) {
        // if everything is good, save to request for use in other routes
        req.token = decoded;
        next();
      } else {
        return res.status(403).json({ success: false, message: 'Failed to authenticate token.' });
      }

      return 0;
    });
  } else {
    // If there is no token, return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }

  return 0;
}
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f

module.exports = router;
