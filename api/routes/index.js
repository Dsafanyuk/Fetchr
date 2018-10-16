var express = require('express');
var router = express.Router();
var userRouter = require('../users/userRoute');
var orderRouter = require('../orders/orderRoute');
var productRouter = require('../products/productRoute');

router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/products', productController);

module.exports = router;
