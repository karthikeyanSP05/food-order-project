const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact_number: {
        type: String,
        required: true
    },
    delivery_address: {
        type: String,
        required: true
    },
    food_item: {
        type: Array,
        required: true
    },
    payment_method: {
        type: String,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model('Orders', orderSchema);

module.exports = Order;