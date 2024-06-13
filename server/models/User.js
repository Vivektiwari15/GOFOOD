const mongoose = require("mongoose")

// creating a schema for a user
const userSchema =new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

// creating a model os user in database
const User = mongoose.model("User",userSchema)
module.exports = User