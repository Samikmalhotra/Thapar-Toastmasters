const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('Server is up on port '+ PORT) 
});