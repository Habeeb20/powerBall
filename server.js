require('dotenv').config();
const express = require("express");
const dbconnect = require("./dbconnection/dbConnect");
const router = require("./routes/route");
const authrouter = require("./routes/authRoute");
const app = express()
dbconnect()
const cookieParser = require("cookie-parser");
const { configDotenv } = require("dotenv");
app.use(express.static('public'))
app.use(express.json())
app.set('view engine', "ejs")
app.use(cookieParser())
app.use(router)
app.use(authrouter)

const port = process.env.PORT || 10000



app.listen(port, () => {
    console.log(`server is listen on port ${port}`)
})