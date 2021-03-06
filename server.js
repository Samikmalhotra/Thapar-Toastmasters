const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

// Define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/meetings',require('./routes/api/meetings'));
app.use('/api/roles',require('./routes/api/roles'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('Server is up on port '+ PORT) 
});