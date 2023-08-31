const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add your Name'],
        },
        email: {
            type: String,
            required: [true, 'Please add your Email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please add a Password']
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)