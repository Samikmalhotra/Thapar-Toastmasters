const mongoose = require('mongoose');
const MeetingSchema = new mongoose.Schema({
    meeting_id:{
        type: Number,
        required:true
    },
    meeting_title:{
        type:String,
        required:true
    },
    meeting_photo:{
        type:String
        // default:
    },
    meeting_date:{
        type: String,
       
    },
    mom_link:{
        type: String,
    },
    tmod:{
        type: String,
       
    },
    wordmaster:{
        type: String,
       
    },
    generaleval:{
        type: String,
       
    },
    tabletopicmaster:{
        type: String,
       
    },
    tabletopiceval:{
        type: String,
       
    },
    ahcounter:{
        type: String,
       
    },
    grammarian:{
        type: String,
       
    },
    listener:{
        type: String,
       
    },
    speaker1:{
        type: String,
       
    },
    speaker2:{
        type: String,
       
    },
    speaker3:{
        type: String,
    },
    speaker4:{
        type: String,
    },
    eval1:{
        type: String,
       
    },
    eval2:{
        type: String,
       
    },
    eval3:{
        type: String,
    },
    eval4:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }

})

module.exports = Meeting = mongoose.model('meeting',MeetingSchema)