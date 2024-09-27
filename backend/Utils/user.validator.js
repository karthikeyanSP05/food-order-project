const express = require('express');
const { body, query } = require('express-validator');
const verifypayload = require('../Utils/general.validator');

const userValidator = {
    signup_validator: [
        body('username').notEmpty().isLength({ min: 4 }).withMessage('Username should be atleast 4 characters'),
        body('email').notEmpty().isEmail().withMessage('Please enter a valid email'),
        body('password').notEmpty().isLength({ min: 8 }).withMessage('Password must be 8 characters'),
        body('confirmPassword').notEmpty().isLength({ min: 8 }).withMessage('Password must be 8 characters'),
        verifypayload
    ],
    login_validator: [
        body('username').notEmpty().isLength({ min: 4 }).withMessage('Username should be atleast 4 characters'),
        body('password').notEmpty().isLength({ min: 8 }).withMessage('Password must be 8 characters'),
        verifypayload
    ]
}

module.exports = userValidator;