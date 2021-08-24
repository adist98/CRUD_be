const express = require("express")
const router = express.Router();
const cors = require("cors");
const Task = require("../models/task")

router.get('/', (req,res) => {
    Task.find()
    .then(tasks => {
        res.send(tasks);
    }).catch(err => {
        res.status(500).send(err);
    })
})

module.exports = router;