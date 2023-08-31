const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add your Name']
        },
        email: {
            type: String,
            required: [true, 'Please add your Email']
        },
        password: {
            type: String,
            required: [true, 'Please add a Password']
        },
        height: {
            type: Number,
            required: [true, 'Please add your height']
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)