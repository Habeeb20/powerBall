const { Timestamp } = require("mongodb")
const mongoose = require("mongoose")
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required: [true, 'please enter your full name']
    },

    email: {
        type:String,
        required: [true, 'please enter your email'],
        unique: true,
        validate: [isEmail, 'please enter a valid email']
     
    },

    phone: {
        type:String,
        required: [true, 'please enter your number']
    },

    location: {
        type:String,
        required: [true, 'please enter your location']
    }



}, {Timestamps: true})


module.exports = mongoose.model("User", userSchema)