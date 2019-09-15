var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/register", function(req, res, next) {
  console.log(req.body.email);
  console.log("in register controller");
  if(req.body.email == 'marghoobahmad0344@gmail.com') // there we will check the email is already present or not
  res.send({status:"fail",error:"user is already registered"});
  else{   //////// there we will enter the email and send the verification mail to the user
      res.send({status:'success',error:null});
  }
});

module.exports = router;
