const express = require('express');
const { body, query } = require('express-validator');
const verifypayload = require('./general.validator');

const orderValidator = {
    new_order_validator: [
        body('name').notEmpty().isLength({ min: 4 }).withMessage('Username should be atleast 4 characters'),
        body('contact_number').notEmpty().isLength(10).withMessage('Contact number must be 10 numbers'),
        body('delivery_address').notEmpty().withMessage('Address field cannot be empty'),
        body('food_item').isArray({ min: 1 }).withMessage('Select atleast one food item'),
        body('payment_method').notEmpty().withMessage('Select one payment method'),
        body('total_amount').notEmpty().withMessage('Amount is required'),
        verifypayload
    ],
    update_order_validator: [
        query('id').notEmpty().withMessage('Please enter ID'),
        body('name').notEmpty().isLength({ min: 4 }).withMessage('Username should be atleast 4 characters'),
        body('contact_number').notEmpty().isLength(10).withMessage('Contact number must be 10 numbers'),
        body('delivery_address').notEmpty().withMessage('Address field cannot be empty'),
        body('food_item').isArray({ min: 1 }).withMessage('Select atleast one food item'),
        body('payment_method').notEmpty().withMessage('Select one payment method'),
        body('total_amount').notEmpty().withMessage('Amount is required'),
        verifypayload
    ],
    delete_order_validator: [
        query('id').notEmpty().withMessage('Please enter ID'),
        verifypayload
    ]
}

module.exports = orderValidator;