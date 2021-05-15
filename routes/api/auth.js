const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');


// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post('/',
    [
        check('toastmaster_id',"Please include an id").not().isEmpty(),
        check('password',"Password is required").exists()
    ],
    async(req,res)=>{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {toastmaster_id,password} = req.body;

        try{
            let user = await User.findOne({toastmaster_id});

            // See if user exists
            if(!user){
               return res.status(400).json({errors: [{msg:"Invalid Credentials"}]});
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({errors: [{msg:"Invalid Credentials"}]});
            }

            // Return jsonwebtoken
            const payload = {
                user:{
                    id: user.id,
                }
            }

            jwt.sign(payload, config.get('jwtSecret'),{expiresIn: 360000}, (err,token)=>{
                if(err){
                    throw err;
                }
                res.json({token});
            });

        }catch(e){
            console.error(e.message);
            res.status(500).send('Server Error!')
        }
    });

    // @route   POST api/auth/users
// @desc    Register user
// @access  Public
router.post('/users',
[
    check('name', 'Name is required').not().isEmpty(),
    check('toastmaster_id',"Please include an id").not().isEmpty(),
    check('password',"Please enter a password of atleast 6 characters").isLength({min: 6}),
    check('pathway',"Please include a pathway").not().isEmpty(),

],
async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {name, toastmaster_id, password, pathway, role, avatar} = req.body;

    try{
        let user = await User.findOne({toastmaster_id});

        // See if user exists
        if(user){
           return res.status(400).json({errors: [{msg:"User already exists"}]});
        }
       
        user = new User({
            name,
            toastmaster_id,
            password,
            pathway,
            role,
            avatar
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)
        await user.save();

        // Return jsonwebtoken
        const payload = {
            user:{
                id: user.id,
            }
        }

        jwt.sign(payload, config.get('jwtSecret'),{expiresIn: 360000}, (err,token)=>{
            if(err){
                throw err;
            }
            res.json({token});
        });

    }catch(e){
        console.error(e.message);
        res.status(500).send('Server Error!')
    }
});

module.exports = router;