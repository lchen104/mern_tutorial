const express = require('express');
const colors = require('colors');

const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')

const port = process.env.PORT || 5001;
// const goalRoutes = require('./routes/goalRoutes')

// call the connectDB function
connectDB()

const app = express();

// middleware

// This middleware is used to get the body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.use('/api/goals', goalRoutes)
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});