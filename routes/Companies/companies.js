var express = require("express");
var router = express.Router();

router.get("/topCompanies", function(req, res, next) {
  console.log("çheck the top companies");
  var companyName = ["Habib", "Bank of Punjab", "nestle", "UREA"];
  var symbol = ["HBL", "BOP", "NSL", "UREA"]; // get stored data from the mongodb
  var stock = [20, 30, 20, 33];
  var rate = [500,300,23,44]

  res.send({ status: "success", symbol: symbol,stock:stock,rate:rate ,companyName:companyName});
});
router.get("/HighSharesRates", function(req, res, next) {
  console.log("çheck the top companies");
 
  var companyName = ["high shares", "Bank of Punjab", "nestle", "UREA"];
  var symbol = ["HBL", "BOP", "NSL", "UREA"]; // get stored data from the mongodb
  var stock = [20, 30, 20, 33];
  var rate = [500,300,23,44]
  res.send({ status: "success", symbol: symbol,stock:stock,rate:rate ,companyName:companyName});
});
router.get("/LowSharesRates", function(req, res, next) {
  console.log("çheck the top companies");
  var companyName = ["low shares", "Bank of Punjab", "nestle", "UREA"];
  var symbol = ["HBL", "BOP", "NSL", "UREA"]; // get stored data from the mongodb
  var stock = [20, 30, 20, 33];
  var rate = [500,300,23,44]
  res.send({ status: "success", symbol: symbol,stock:stock,rate:rate ,companyName:companyName});
});
router.get("/Defaulter", function(req, res, next) {
  console.log("çheck the top companies");
  var companyName = ["defaulter", "Bank of Punjab", "nestle", "UREA"];
  var symbol = ["HBL", "BOP", "NSL", "UREA"]; // get stored data from the mongodb
  var stock = [20, 30, 20, 33];
  var rate = [500,300,23,44]
  res.send({ status: "success", symbol: symbol,stock:stock,rate:rate ,companyName:companyName});
});
router.get("/AllCompanies", function(req, res, next) {
  console.log("çheck the top companies");
  var companyName = ["all companies", "Bank of Punjab", "nestle", "UREA"];
  var symbol = ["HBL", "BOP", "NSL", "UREA"]; // get stored data from the mongodb
  var stock = [20, 30, 20, 33];
  var rate = [500,300,23,44]
  res.send({ status: "success", symbol: symbol,stock:stock,rate:rate ,companyName:companyName});
});
router.get("/FinancialReports", function(req, res, next) {
  console.log("çheck the top companies");
  var companyName = ["Financial", "Bank of Punjab", "nestle", "UREA"];
  var symbol = ["HBL", "BOP", "NSL", "UREA"]; // get stored data from the mongodb
  var stock = [20, 30, 20, 33];
  var rate = [500,300,23,44]
  res.send({ status: "success", symbol: symbol,stock:stock,rate:rate ,companyName:companyName});
});

module.exports = router;
