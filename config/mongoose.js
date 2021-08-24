const mongoose = require("mongoose");

// database definition
mongoose.connect('mongodb://localhost/todoapp');

// Establishing the connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to the Database"));

db.once('open', function(){
    console.log("Successfully connected to the Database");
})

module.exports = db;
