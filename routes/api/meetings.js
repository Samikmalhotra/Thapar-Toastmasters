const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');
const Meeting = require('../../models/Meeting') 

// @route   POST api/meetings
// @desc    Add meeting
// @access  Public
router.post('/',
[
    check('meeting_id', 'meeting_id is required').not().isEmpty(),
    check('meeting_title',"Please include meeting_title").not().isEmpty(),
    check('date',"Please enter a password of atleast 6 characters").not().isEmpty(),
    check('mom_link',"Please include a pathway").not().isEmpty(),
    check('tmod',"Please include a pathway").not().isEmpty(),
    check('wordmaster',"Please include a pathway").not().isEmpty(),
    check('generaleval',"Please include a pathway").not().isEmpty(),
    check('tabletopicmaster',"Please include a pathway").not().isEmpty(),
    check('tabletopiceval',"Please include a pathway").not().isEmpty(),
    check('ahcounter',"Please include a pathway").not().isEmpty(),
    check('grammarian',"Please include a pathway").not().isEmpty(),
    check('listener',"Please include a pathway").not().isEmpty(),
    check('speaker1',"Please include a pathway").not().isEmpty(),
    check('speaker2',"Please include a pathway").not().isEmpty(),
    check('eval1',"Please include a pathway").not().isEmpty(),
    check('eval2',"Please include a pathway").not().isEmpty(),

],
async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {
        meeting_id,
        meeting_title,
        date,
        mom_link,
        tmod,
        wordmaster,
        generaleval,
        tabletopicmaster,
        tabletopiceval,
        ahcounter,
        grammarian,
        listener,
        speaker1,
        speaker2,
        speaker3,
        speaker4,
        eval1,
        eval2,
        eval3,
        eval4
        
    } = req.body;

    try{
        let meeting = await Meeting.findOne({meeting_id});

        // See if meeting exists
        if(meeting){
           return res.status(400).json({errors: [{msg:"meeting already exists"}]});
        }
       
        meeting = new Meeting({
            meeting_id,
            meeting_title,
            date,
            mom_link,
            tmod,
            wordmaster,
            generaleval,
            tabletopicmaster,
            tabletopiceval,
            ahcounter,
            grammarian,
            listener,
            speaker1,
            speaker2,
            speaker3,
            speaker4,
            eval1,
            eval2,
            eval3,
            eval4
        });

        await meeting.save()

    }catch(e){
        console.error(e.message);
        res.status(500).send('Server Error!')
    }
});

module.exports = router