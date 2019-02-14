const express = require('express');

const router = express.Router();
const courierController = require('./courierController');

router.get('/:user_id/order', courierController.showCourierOrders);
router.get('/:user_id/acceptedOrders', courierController.acceptedOrders);
router.get('/:user_id/countAvailableOrder', courierController.countAvailableOrder);
router.get('/:user_id/getTotalDelivered', courierController.countDelivered);
router.get('/:user_id/getRevenue', courierController.getRevenue);
router.post('/accept', courierController.acceptOrder);


module.exports = router;
