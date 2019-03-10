const express = require('express');

const router = express.Router();
const adminController = require('./adminController');

router.get('/products', adminController.showAllProducts);
router.post('/products', adminController.addProduct);
router.put('/product/:product_id', adminController.editProduct);

module.exports = router;
