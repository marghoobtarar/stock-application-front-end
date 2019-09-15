var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/login", function(req, res, next) {
  //login the user

  // importantttttttttttttttttttttttttttttttttt//
  // alse save the user type  with the session so later on route restriction can appropirate apply and access the only session allowed route

  var username = req.body.username;

  var password = req.body.password;

  var available_user = "marghoobahmad0344@gmail.com";
  var user_password = "marghoob";
  //check admin account is available
  var admin = "stockbuy786@gmail.com";
  var admin_password = "stock786";
  if (username == available_user && password == user_password) {
    res.send({ status: "success", person: "user" });
  }

  if (username.toLowerCase() == admin && password == admin_password) {
    res.send({ status: "success", person: "admin" });
  } else res.send({ status: "you entered wrong email adress or password" });

  console.log(username);
  //there we will check either the user is available or not or either the entered password is wrong?
  res.send({ status: "success" });
});
router.get("/logout", function(req, res, next) {
  //logout here delete the session and cookie
  res.send({ status: "success" });
});
router.get("/status", function(req, res, next) {
  //check either the user is logged in or not

  console.log("checking the user status");
  //status is true when the session is not expire or user logout//

  res.send({ status: "success", person: "user" }); // the admin is getting form the stored session and if the session is user then it will be updated to the user vise versa
  //status is false when the user is logout or the session is expired
  //res.send({status:'false'})
});

module.exports = router;
