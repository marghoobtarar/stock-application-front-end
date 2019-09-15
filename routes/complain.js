//send email when the situation resolve and send it to the admin side and save complain to the database and notify the admin
var express = require("express");
var router = express.Router();

router.post("/investor", function(req, res, next) {
  var user = {
    complaitant: null,
    cnic: null,
    investor: null,
    email: null,
    phone: null,
    complain: null
  };
  user.complaitant = req.body.complaitant;
  user.cnic = req.body.cnic;
  user.investor = req.body.investor;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.complain = req.body.complain;
  console.log(user);
  res.send({ state: "success" });
});

router.post("/company", function(req, res, next) {
  var company = {
    complaitant: null,
    name: null,
    NationalTaxNumber: null,
    registeratoionNumber: null,
    email: null,
    phone: null,
    complain: null
  };
  company.complaitant = req.body.complaitant;
  company.name = req.body.name;
  company.registeratoionNumber = req.body.registeratoionNumber;

  company.NationalTaxNumber = req.body.NationalTaxNumber;
  company.email = req.body.email;
  company.phone = req.body.phone;
  company.complain = req.body.complain;
  console.log(company);
  res.send({ state: "success" });
});

module.exports = router;
