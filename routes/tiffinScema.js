var mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/minorprojectdb");
var tiffinSchema= mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: Number,
  mealTime : String,
  mealDate: Date,
  Address : String
})
module.exports = mongoose.model("tiffin",tiffinSchema);