const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true,"User must have a username"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"User must have a password"],
        
    }
})

module.exports = mongoose.model("User",userSchema);