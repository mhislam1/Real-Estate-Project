let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    first:{
        type: String,
        required: true
    },
    last:{
        type: String,
        required: true
    },
    middle:{
        type: String,
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Users',userSchema);