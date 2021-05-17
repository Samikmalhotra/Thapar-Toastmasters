const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');
const Role = require('../../models/Role') 

// @route   POST api/roles
// @desc    Create a role
// @access  Public 
router.post('/',[
    check('toastmaster_id', 'toastmaster_id is required').not().isEmpty(),
    check('role',"Please include a role").not().isEmpty(),
    check('meeting_id',"Please include meeting_id").not().isEmpty(),
    check('meeting_date',"Please include meeting_date").not().isEmpty(),
], async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {
        toastmaster_id,
        role,
        meeting_id,
        meeting_date,
        commendation
    } = req.body
    try {

        const newRole = new Role({
            toastmaster_id,
            role,
            meeting_id,
            meeting_date,
            commendation
        })

        const newrole = await newRole.save();

        res.json(newrole);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error!');
    }
})

// @route   GET api/roles/:toastmaster_id
// @desc    Get role by id
// @access  Public
router.get('/:toastmaster_id', async(req,res)=>{
    try {
        const roles = await Role.find({toastmaster_id: req.params.toastmaster_id})
        if(!roles){
            return res.status(404).json({msg:'No roles found'})
        }
        res.json(roles)
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error!');
    }
})

module.exports = router