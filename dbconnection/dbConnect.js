const mongoose = require("mongoose")

const dbconnect = async() =>{
    try {
        // const connect = await mongoose.connect("mongodb+srv://Habeeb:Ademola1234@habeeb.pal57xa.mongodb.net/PowerBall?retryWrites=true&w=majority")
        const connect = await mongoose.connect("mongodb+srv://pbllworld:goal12345@powerball.lllsua4.mongodb.net/powerball?retryWrites=true&w=majority")
        if(connect){
            console.log("successfully connected to the database")
        } else {
            console.log("it encountered an error")
        }
        
    } catch (error) {
        console.log(error)
        
    }
 
}


module.exports = dbconnect;