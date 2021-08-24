const express = require("express")
const router = express.Router();
const cors = require("cors");
const Task = require("../models/task")

router.post('/', (req,res) => {
    Task.create({
        task_description: req.body.description
    }, function(err, newTask){
        if(err){
            console.log(err)
            return;
        }else{
            return res.send(newTask)
        }
    })
})

module.exports = router;