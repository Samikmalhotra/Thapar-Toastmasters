const mongoose = require('mongoose');
const MeetingSchema = new mongoose.Schema({
    meeting_id:{
        type: Number,
        required: true
    },
    meeting_title:{
        type:String,
        required:true
    },
    meeting_photo:{
        type:String
        // default:
    },
    date:{
        type: String,
        required: true
    },
    mom_link:{
        type: String,
        required: true
    },
    tmod:{
        type: String,
        required: true
    },
    wordmaster:{
        type: String,
        required: true
    },
    generaleval:{
        type: String,
        required: true
    },
    tabletopicmaster:{
        type: String,
        required: true
    },
    tabletopiceval:{
        type: String,
        required: true
    },
    ahcounter:{
        type: String,
        required: true
    },
    grammarian:{
        type: String,
        required: true
    },
    listener:{
        type: String,
        required: true
    },
    speaker1:{
        type: String,
        required: true
    },
    speaker2:{
        type: String,
        required: true
    },
    speaker3:{
        type: String,
    },
    speaker4:{
        type: String,
    },
    eval1:{
        type: String,
        required: true
    },
    eval2:{
        type: String,
        required: true
    },
    eval3:{
        type: String,
    },
    eval4:{
        type: String,
    },

})

module.exports = Meeting = mongoose.model('meeting',MeetingSchema)