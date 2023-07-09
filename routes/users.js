var express = require('express');
const plm=require("passport-local-mongoose");
const { default: mongoose } = require('mongoose');
var router = express.Router();
// mongoose.connect("mongodb://127.0.0.1:27017/minorprojectdb");
// const db="mongodb+srv://jadiyavanshita:naman@cluster0.xb9nrh0.mongodb.net/food?retryWrites=true&w=majority"
// mongoose.connect(db);
mongoose.connect("mongodb+srv://jadiyavanshita:naman@cluster0.xb9nrh0.mongodb.net/food?retryWrites=true&w=majority")
.then(()=>console.log("DB Connected"))
.catch((error) =>{
  console.log(error);
})
var userSchema= mongoose.Schema({
  name:String,
  image:String,
  response: String
})
userSchema.plugin(plm);
module.exports = mongoose.model("user",userSchema);
