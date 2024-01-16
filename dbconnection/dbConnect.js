const mongoose = require("mongoose")

const dbconnect = async() =>{
    try {
        const connect = await mongoose.connect("mongodb+srv://Habeeb:Ademola1234@habeeb.pal57xa.mongodb.net/PowerBall?retryWrites=true&w=majority")
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