const Order = require('../Model/order.model');
const response = require('../Config/constant');

const orderService = {
    new_order: async (req, res) => {
        try {
            const { name, contact_number, delivery_address, food_item, payment_method, total_amount } = req.body;
            const newOrder = new Order({ name, contact_number, delivery_address, food_item, payment_method, total_amount });
            if (newOrder) {
                await newOrder.save()
                res.send(response.successResponse.order_success);
            } else {
                res.send(response.errorResponse.order_error);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    update_order: async (req, res) => {
        try {
            const orderId = req.query.id
            const { name, contact_number, delivery_address, food_item, payment_method, total_amount } = req.body;
            const order = await Order.findByIdAndUpdate({ _id: orderId }, { name, contact_number, delivery_address, food_item, payment_method, total_amount });
            if (order) {
                res.send(response.successResponse.order_update);
            } else {
                res.send(response.errorResponse.order_update_error);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    delete_order: async (req, res) => {
        try {
            const orderId = req.query.id
            const order = await Order.findByIdAndDelete({ _id: orderId });
            if (order) {
                res.send(response.successResponse.order_delete);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    get_order: async (req, res) => {
        try {
            const order = await Order.find({})
            res.send(order)
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

module.exports = orderService;