const response = {
    successResponse: {
        login_success: 'Login successfully',
        signup_success: 'Signup successfully',
        order_success: "Order placed successfully",
        order_update: "Order updated successfully",
        order_delete: "Order has been cancelled"
    },
    errorResponse: {
        password_error: 'Incorrect password',
        signup_error: 'Username already exists',
        login_error: 'User not found',
        email_error: "This email is already associated with an account.",
        confirm_password_error: "Password and confirmation password does not match",
        order_error: "Order not placed",
        order_update_error: "Order not exists"
    }
}

module.exports = response;