var express = require('express');
var router = express.Router();
var userRouter = require('../users/userRoute');
var orderRouter = require('../orders/orderRoute');
var productRouter = require('../products/productRoute');
var courierRouter = require('../courier/courierRoute');
var verifyToken = require('./verifyToken');
var accountRouter = require('../account/accountRoute');

router.use('/users', userRouter);
router.use('/orders', verifyToken, orderRouter);
router.use('/products', verifyToken, productRouter);
router.use('/courier', courierRouter);
router.use('/account', accountRouter);

module.exports = router;
