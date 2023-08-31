
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') // to hash our password
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@ desc    Register new user
//@route    POST /api/users
//@access   PUBLIC
const registerUser = asyncHandler(async(req, res) => {

    // send body data
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    res.json({
        message: 'Register User'
    })
})

//@ desc    Authenticate a user
//@route    POST /api/users/login
//@access   PUBLIC
const loginUser = asyncHandler(async(req, res) => {
    res.json({
        message: 'Login User'
    })
})

//@ desc    Get user data
//@route    GET /api/users/me
//@access   PUBLIC
const getMe = asyncHandler(async(req, res) => {
    res.json({
        message: 'Display user data'
    })
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}