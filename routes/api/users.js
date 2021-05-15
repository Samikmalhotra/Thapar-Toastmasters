const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')

const User = require('../../models/User')




module.exports = router;