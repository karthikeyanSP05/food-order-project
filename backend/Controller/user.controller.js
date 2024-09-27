const userService = require('../Service/user.service');

const userController = {
    signup_user: async (req, res) => {
        userService.signup_user(req, res);
    },
    login_user: async (req, res) => {
        userService.login_user(req, res);
    },

}

module.exports = userController;