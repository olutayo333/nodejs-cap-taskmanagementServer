const { status } = require("express/lib/response");
const userModel = require("../models/user.model")
let jwt = require("jsonwebtoken");

const submittask= (req,res)=>{
    let userData = {
        name: req.body.name,
        department: req.body.department,
        taskdetails: req.body.taskdetails,
        hoursworked: req.body.hoursworked,
        date: req.body.date,
    }
    let task = new userModel(userData)
    task.save()
    .then(()=>{console.log("task saved successfully"); res.send({status:true, message:"task submitted successfully"})})
    .catch((err)=>{console.log("failed", err); res.send({status:false, message:"task could not be submitted"})})
}

const dashboard = (req, res)=>{
    userModel.find()
    .then((result)=>{console.log("task loaded successfully"); 
    res.send({status:true, message:"task loaded successfully", result })})
    
    .catch((err)=>{console.log("could not load task", err); 
    res.send({status:false, message:"could not load task"})})
}

const deletetask = (req, res)=>{
    let taskID = req.body._id; console.log(req.body);
    userModel.findOneAndDelete({_id:taskID})
    .then((result)=>{console.log(result); res.send({status:true, message:"Deleted successfully", result})})
    .catch((err)=>{console.log(err+ "couldnt delete"); res.send({status:false, message:"could not Delete", result})})
}

const edittask = (req, res)=>{
    console.log(req.body);
    let name = req.body.name; let department = req.body.department; let taskdetails= req.body.taskdetails;
    let hoursworked = req.body.hoursworked; let date = req.body.date; let id= req.body.id;

    userModel.findOneAndUpdate({_id:id}, {name, department, taskdetails, hoursworked, date})
    .then((result)=>{
        console.log(result);
        res.send({status:true, message:"Edited Successfully"})
    })
    .catch((err)=>{res.send({status:false, message:" Edit failed" + " " + err}); console.log(err, "couldnt edit");})
}

module.exports={submittask, dashboard, deletetask, edittask}