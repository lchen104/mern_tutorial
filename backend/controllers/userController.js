

//@ desc    Register new user
//@route    POST /api/users
//@access   PUBLIC
const registerUser = (req, res) => {
    res.json({
        message: 'Register User'
    })
}

//@ desc    Authenticate a user
//@route    POST /api/users/login
//@access   PUBLIC
const loginUser = (req, res) => {
    res.json({
        message: 'Login User'
    })
}

//@ desc    Get user data
//@route    GET /api/users/me
//@access   PUBLIC
const getMe = (req, res) => {
    res.json({
        message: 'Display user data'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}