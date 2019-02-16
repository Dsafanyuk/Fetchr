var express = require('express');
var router = express.Router();
var userRouter = require('../users/userRoute');
var orderRouter = require('../orders/orderRoute');
var productRouter = require('../products/productRoute');
var verifyToken = require('./verifyToken');

router.use('/users', userRouter);
router.use('/orders', verifyToken, orderRouter);
router.use('/products', verifyToken, productRouter);

module.exports = router;
