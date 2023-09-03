const path = require('path')

const express = require('express');
const colors = require('colors');

const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')

const port = process.env.PORT || 5005;
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

// serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});