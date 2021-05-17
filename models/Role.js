const mongoose = require('mongoose');
const RoleSchema = new mongoose.Schema({
    toastmaster_id:{
        type: String,
        ref: 'user',
        required: true
    },
    role:{
        type:String,
        required: true
    },
    meeting_id:{
        type: Number,
        required: true
    },
    meeting_date:{
        type:String,
        required: true
    },
    commendation:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }

})

module.exports = Role = mongoose.model('role', RoleSchema)