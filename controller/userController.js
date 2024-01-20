const User = require("../models/User")

const home = async (req, res) => {
    res.render("home")

}

const home1 = async( req, res) => {
    res.render("home1")
}

const invest = async(req, res) => {
    res.render("invest")

}

const postInvest = async(req, res) => {
    const {fullname, email, phone, location} = req.body

    try {
        const user = await User.create({fullname, email, phone, location})
        if(user){
            // const user = await User.find()
            res.render("profile", {
                _id: req.params.id,
                fullname:req.body.fullname,
                email : req.body.email,
                phone :req.body.phone,
                location: req.body.location,
    
    
                user:user,
                fullname:fullname,
                email:email,
                phone:phone,
                location: location
    
            })
        } else {
            console.log("there is error")
        }
    } catch (error) {
         console.log(error)
        
    }

   


}

const profile = async (req, res) => {
    const user = await User.find();
    if(user.length)
    console.log(user)
    try {
        res.render('profile', { 
            _id: req.params.id, 
            
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            loaction: req.body.location,

            data: data
   
          
         })
        
    } catch (error) {
        
    }
   
}

module.exports = {
    home,
    invest,
    postInvest,
    profile,
    home1
}