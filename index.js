const mongoose = require("mongoose");

const express = require("express");
const app = express();

require("dotenv").config()
const cors = require("cors")

let userRouter = require("./routes/user.route");

//MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({extended:true, limit:"50mb"}))
app.use(express.json({limit:"50mb"}))
app.use('/user', userRouter)

//connecting to db
let URI = process.env.URI;
    mongoose.connect(URI)
    .then(()=>{console.log("Mongo has connect");})
    .catch((err)=>{console.log("Mongo refuse" + err);})

    let PORT = process.env.PORT
    app.listen(PORT, ()=>{console.log("app is listening at PORT: " + PORT);})

//HANDLING invalid url
app.use((req, res, next) => {
    const error = new Error ('Invalid URL');
    error.status = 404;
    next(error)
})
