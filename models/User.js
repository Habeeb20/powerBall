const { Timestamp } = require("mongodb")
const mongoose = require("mongoose")
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },

    email: {
        type:String,
        required: true
     
     
    },

    phone: {
        type:String,
        required: true
    },

    location: {
        type:String,
        required: true
    },
 



}, {Timestamps: true})


module.exports = mongoose.model("User", userSchema)