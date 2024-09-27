const orderService = require('../Service/order.service');

const orderController = {
    new_order: async (req, res) => {
        orderService.new_order(req, res);
    },
    update_order: async (req, res) => {
        orderService.update_order(req, res);
    },
    delete_order: async (req, res) => {
        orderService.delete_order(req, res);
    },
    get_order: async (req, res) => {
        orderService.get_order(req, res)
    }
}

module.exports = orderController;