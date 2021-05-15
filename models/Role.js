const mongoose = require('mongoose');
const RoleSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    role:{
        type:String,
        required: true
    },
    meeting_id:{
        type: Number,
        required: true
    },
    date:{
        type:Date,
        required: true
    },
    commendation:{
        type: String,
    }
})

module.exports = Role = mongoose.model('role', RoleSchema)