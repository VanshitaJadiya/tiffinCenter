var express = require('express');
const plm=require("passport-local-mongoose");
const { default: mongoose } = require('mongoose');
var router = express.Router();
mongoose.connect("mongodb://127.0.0.1:27017/minorprojectdb");
var userSchema= mongoose.Schema({
  name:String,
  image:String,
  response: String
})
userSchema.plugin(plm);
module.exports = mongoose.model("user",userSchema);
