const express = require('express');

const router = express.Router();
const courierController = require('./courierController');

router.get('/:user_id/order', courierController.showCourierOrders);
router.get('/:user_id/acceptedOrders', courierController.acceptedOrders);
router.post('/accept', courierController.acceptOrder);
router.post('/:order_id/deliverOrder', courierController.deliverOrder);

module.exports = router;
