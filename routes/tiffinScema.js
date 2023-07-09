var mongoose =require("mongoose");
// const db="mongodb+srv://jadiyavanshitaUsLfJlgIPfog3RgY@cluster0.xb9nrh0.mongodb.net/jadiyavanshita?retryWrites=true&w=majority";
// mongoose.connect(db,{
//   useNewUrlParser: true,
//   useCreateIndex : true,
//   useUnifiedTopology : true,
//   useFindAndModify : false
// }).then(() => {
//   console.log("connection established")
// }).catch(err=>{
//   console.log('connection failed');
// });
// mongoose.connect("mongodb://127.0.0.1:27017/minorprojectdb");
var tiffinSchema= mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: Number,
  mealTime : String,
  mealDate: String,
  Address : String
})
module.exports = mongoose.model("tiffin",tiffinSchema);