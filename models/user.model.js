const mongoose = require("mongoose") //connecting to mongodb
//const bcryptjs = require("bcryptjs"); const bcrypt = require("bcryptjs/dist/bcrypt");

let taskSchema = mongoose.Schema({
    name:{type: String, required:true},
    department:{type: String, required:true},
    taskdetails:{type: String, required:true},
    hoursworked:{type: Number, required:true},
    date:{type: String, required:true},
    
})

let taskModel = mongoose.model("TaskDetails", taskSchema)
module.exports = taskModel