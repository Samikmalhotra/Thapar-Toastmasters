const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const auth = require('../../middleware/auth');

const User = require('../../models/User')


// @route    GET api/users/:toastmaster_id
// @desc     Get user by id
// @access   Public
router.get('/:toastmaster_id', async (req, res) => {

    const {toastmaster_id} = req.body;

    try {
      const user = await User.findOne({toastmaster_id: req.params.toastmaster_id});
  
      if (!user) {
        return res.status(400).json({ msg: 'User does not exist' });
      }
  
      res.json(user);
    } catch (e) {
      console.error(e.message);
      res.status(500).send('Server Error');
    }
  });


// @route    GET api/users
// @desc     Get all users
// @access   Public
router.get('/', async(req,res)=>{
    try {
        const users = await User.find();
        res.json(users) 
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error!')
    }
})

module.exports = router;