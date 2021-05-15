const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    toastmaster_id:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pathway:{
        type: String, 
        required: true
    },
    role:{
        type: String,
        default: "member"
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema); 