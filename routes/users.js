// var express = require('express');
// var router = express.Router();



var mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/minorprojectdb");
var userSchema= mongoose.Schema({
  name:String,
  image:String,
  response: String
})
module.exports = mongoose.model("user",userSchema);
// module.exports = router;
