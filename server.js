const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const db = require('./config/mongoose');

app.use(express.json());
app.use(cors());

const port = 80;

// create a new task
const createTodo = require("./routes/createTodo");
app.use("/createtodo", createTodo);

// read all the tasks
const readTodo = require("./routes/readTodo");
app.use("/readtodo", readTodo);

// update a task by id
const updateTodo = require("./routes/updateTodo");
app.use("/updatetodo", updateTodo);

// delete a task by id
const deleteTodo = require("./routes/deleteTodo");
app.use("/deletetodo", deleteTodo);

app.get("/", (req, res) => {
    res.send("server working on port 80");
  });
app.listen(port);
  
