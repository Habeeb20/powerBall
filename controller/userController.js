const User = require("../models/User")
const Auth = require("../models/auth")
const jwt = require("jsonwebtoken")

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {username: '', password: ''}

    if(err.message === 'incorrect username'){
        errors.username = 'the username is not registered';
    }


    if(err.message === 'incorrect password'){
        errors.password = 'the password is incorrect'
    }

    if(err.message.includes("user validation failed")){
        console.log(Object.values(err.errors).forEach(({properties})=> {
            console.log(properties)
            errors[properties.path] = properties.message
        }))
    }
    return errors
}

const maxAge = 3 * 24 * 60 * 60
const createToken =async (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: maxAge})
}



const home = async (req, res) => {
    res.render("home")

}
const register = async(req, res) => {
    res.render("register")
}

const postRegister = async(req, res) => {
    const {username, password} = req.body

    try {
        const user = await Auth.create({username, password})
        const token = createToken(user._id)
        res.cookie('jwtcookie', token, {httpOnly: true, maxAge:maxAge * 1000})
        res.status(201).json({user: user._id})
    } 
    catch (error) {
        const errors = handleErrors(error)
        res.status(400).json({errors})
    }
}

const login = async(req, res) => {
    
    res.render("login")
}

const postLogin = async(req, res) => {
    const {username, password} = req.body;

    try {
        const user = await Auth.login(username, password);
        const token = createToken(user._id)
        res.cookie('jwtcookie', token, {httpOnly: true, maxAge:maxAge * 1000})
        res.status(201).json({user: user._id})
    } catch (error) {
        const errors = handleErrors(error)
        res.status(400).json({errors})
        
    }
}

const invest = async(req, res) => {

}

const logout = async(req, res) => {
    res.cookie('jwt', '', {maxAge: 1})
    res.redirect("/")
}


module.exports = {
    home,
    login,
    register,
    postLogin,
    postRegister,
    invest,
    logout
}