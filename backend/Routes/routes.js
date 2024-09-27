const express = require('express');
const userController = require('../Controller/user.controller');
const orderController = require('../Controller/order.controller');
const userValidator = require('../Utils/user.validator');
const orderValidator = require('../Utils/order.validator');

const router = express.Router();

router.post('/user/signup', userValidator.signup_validator, userController.signup_user);
router.post('/user/login', userValidator.login_validator, userController.login_user);
router.post('/user/neworder', orderValidator.new_order_validator, orderController.new_order);
router.put('/user/updateorder', orderValidator.update_order_validator, orderController.update_order);
router.delete('/user/deleteorder', orderValidator.delete_order_validator, orderController.delete_order);
router.get('/user/getorder', orderController.get_order);

module.exports = router;