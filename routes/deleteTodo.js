const express = require("express")
const router = express.Router();
const cors = require("cors");
const Task = require("../models/task")

router.post('/', (req,res) => {
    Task.findByIdAndRemove(req.body.id).
    then(task => {
        res.send(task)
    }).catch(err => {
        res.status(500).send(err);
    })


})

module.exports = router;