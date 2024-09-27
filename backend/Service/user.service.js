const User = require('../Model/user.model');
const response = require('../Config/constant');

const userService = {
    signup_user: async (req, res) => {
        try {
            const { username, email, password, confirmPassword } = req.body
            if (password === confirmPassword) {
                const existUser = await User.findOne({ username: username })
                if (!existUser) {
                    const existEmail = await User.findOne({ email: email })
                    if (!existEmail) {
                        const user = new User({ username, email, password, confirmPassword })
                        await user.save();
                        res.send(response.successResponse.signup_success);
                    } else {
                        res.status(400).send(response.errorResponse.email_error);
                    }
                } else {
                    res.status(400).send(response.errorResponse.signup_error);
                }
            } else {
                res.status(400).send(response.errorResponse.confirm_password_error);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    login_user: async (req, res) => {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username: username })
            if (user) {
                if (user.password === password) {
                    res.send(response.successResponse.login_success);
                } else {
                    res.status(404).send(response.errorResponse.password_error);
                }
            } else {
                res.status(404).send(response.errorResponse.login_error);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

module.exports = userService;