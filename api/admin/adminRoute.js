const express = require('express');

const router = express.Router();
const adminController = require('./adminController');

router.get('/products', adminController.showAllProducts);
router.post('/products', adminController.addProduct);
router.put('/product/:product_id', adminController.editProduct);

router.get('/users', adminController.showAllUsers);
router.post('/users', adminController.addUser);
router.put('/user/:user_id', adminController.editUser);

router.get('/graphs/ordersPerDay', adminController.ordersPerDay);
router.get('/graphs/productsPerDay', adminController.productsPerDay);
router.get('/graphs/prodsSoldByCat', adminController.prodsSoldByCat);
module.exports = router;
