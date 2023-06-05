var express = require('express');
var router = express.Router();
var userModal=require('./users')
var tiffinModal=require('./tiffinScema');
var Razorpay=require('razorpay');
//instance of razorpay
var instance = new Razorpay({
  key_id: 'rzp_test_r6EJwrxJbscSV9',
  key_secret: 'A0ETOcXCfUXgupemi1uCptXr'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/delivery', function(req, res, next) {
  res.render('delivery');
});
router.get('/menu', function(req, res, next) {
  res.render('menu');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/addResponse', function(req, res, next) {
  res.render('response');
});
// router.post('/response',function(req,res){
//   console.log(req.body);
//   const personal=req.body;
//   res.render('card',{personal});
// })
router.post('/submitresponse',function(req,res){
  userModal.create({
    name: req.body.name,
    response: req.body.response,
    image: req.body.image
  }).then(function(data){
    res.redirect('/showAllResponse');
  })
})
router.get('/showAllResponse',function(req,res){
  userModal.find()
  .then(function(alldata){
    console.log(alldata);
    res.render("Allresponse",{alldata});
  })
})
router.post('/submitOrder',function(req,res){
  if(req.body.fname=="" || req.body.lname=="" || req.body.email=="" || req.body.phone=="" || req.body.mdate=="" || req.body.mtime=="" || req.body.address=="" ){
       res.redirect('/contact');         
  }else{
  tiffinModal.create({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    mealDate: req.body.mdate,
    mealTime : req.body.mtime,
    Address : req.body.address

  }).then(function(data){
    console.log(data);
    res.render('checkout',{data});

  })}
})

router.post('/create/orderId',function(req,res,next){
  var options = {
    amount: 6000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function(err, order) {
    console.log(order);
    res.send(order);
  });
});

router.post("/api/payment/verify",(req,res)=>{

  let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
 
   var crypto = require("crypto");
   var expectedSignature = crypto.createHmac('sha256', 'A0ETOcXCfUXgupemi1uCptXr')
                                   .update(body.toString())
                                   .digest('hex');
                                   console.log("sig received " ,req.body.response.razorpay_signature);
                                   console.log("sig generated " ,expectedSignature);
   var response = {"signatureIsValid":"false"}
   if(expectedSignature === req.body.response.razorpay_signature)
    response={"signatureIsValid":"true"}
       res.send(response);
   });

   router.get('/success', function(req, res, next) {
    res.render('success');
  });
 
//  app.listen(port, () => {
//    console.log(`Example app listening at http://localhost:${port}`)
//  })

module.exports = router;
