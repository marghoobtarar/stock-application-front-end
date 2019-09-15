angular
  .module("userController", [])
  .controller("userHomeController", function(
    $scope,
    $http,
    $location,
    AuthService,
    logoutService,
    $q
  ) {
    $scope.isCollapsed = true;

    var jsonify = res => res.json();

    $http.post("/Stock/SearchStock").success(function(data) {
      if (data.state == "success") console.log();
      ////////////////////////////////////////////////////////////getting stock list from the database
      /////////////////graphs data of the market
      Promise.all([data.dataFetch, data.schemaFetch]).then(res => {
        const [data, schema] = res;

        const dataStore = new FusionCharts.DataStore();
        const dataSource = {
          chart: {},
          caption: {
            text: "Market"
          },
          subcaption: {
            text: "Observation from east region thermal sensor"
          },
          yaxis: [
            {
              plot: {
                value: "Heat Flux"
              },
              title: "Stock Rates",
              type: "log"
            }
          ]
        };
        dataSource.data = dataStore.createDataTable(data, schema);

        new FusionCharts({
          type: "timeseries",
          renderAt: "chart-container",
          width: "100%",
          height: "500",
          margin: "10",
          dataSource
        }).render();
      });

      $scope.stocks = data.Stock;
    });

    $scope.findStock = function(value) {
      var deferred = $q.defer();
      if (!value) {
        deferred.reject([]);
      } else {
        var matched = [];
        angular.forEach($scope.stocks, function(e) {
          var re = new RegExp(value, "i");
          if (e.name.match(re) || String(e.id).match(re)) matched.push(e);
        });
        deferred.resolve(matched);
      }
      return deferred.promise;
    };

    //logout
    $scope.logout = function() {
      logoutService.logout();
    };
  })

  .controller("stockController", function(
    $scope,
    $http,
    $location,
    AuthService,
    logoutService,
    $q
  ) {
    $scope.isCollapsed = true;
    var stockEntityName = $location.url();
    stockEntityName = stockEntityName.split("/");

    $scope.StockName = stockEntityName[2];

    $http.post("/Stock/stockEntity", stockEntityName).success(function(data) {
      if (data.state == "success") {
        if (data.Stockdata.change >= 0) {
          $scope.positive = true;
          $scope.conditionColor = "green";
        } else if (data.Stockdata.change < 0) {
          $scope.negative = true;
          $scope.conditionColor = "red";
        }
        dataFetch = data.dataFetch;
        schemaFetch = data.schemaFetch;

        $scope.StockVolume = data.Stockdata.volume;
        $scope.StockChange = data.Stockdata.change;
        $scope.StockHigh = data.Stockdata.high;
        $scope.StockLow = data.Stockdata.low;
        $scope.StockCurrent = data.Stockdata.current;
        $scope.StockOpen = data.Stockdata.open;

        Promise.all([dataFetch, schemaFetch]).then(res => {
          const [data, schema] = res;

          const dataStore = new FusionCharts.DataStore();
          const dataSource = {
            chart: {},
            caption: {
              text: stockEntityName[2]
            },
            subcaption: {
              text: "Observation from east region thermal sensor"
            },
            yaxis: [
              {
                plot: {
                  value: "Heat Flux"
                },
                title: "Stock Rates",
                type: "log"
              }
            ]
          };
          dataSource.data = dataStore.createDataTable(data, schema);

          new FusionCharts({
            type: "timeseries",
            renderAt: "chart-container",
            width: "100%",
            height: "500",
            margin: "10",
            dataSource
          }).render();
        });
      }
    });

    $http.post("/Stock/SearchStock").success(function(data) {
      if (data.state == "success") console.log();
      ////////////////////////////////////////////////////////////getting stock list from the database
      $scope.stocks = data.Stock;
    });

    $scope.stockDetail = true;

    $scope.stockBuy = false;

    $scope.buyStock = function() {
      $scope.stockDetail = false;

      $scope.stockBuy = true;
      console.log("buy it");
    };
    $scope.back = function() {
      $scope.stockDetail = true;

      $scope.stockBuy = false;
    };

    $scope.SubmitStock = function() {
      console.log($scope.stockbuy);
      $http.post("/Stock/buyStock", $scope.stockbuy).success(function(data) {
        if (data.state == "success") {
          $scope.stockDetail = true;

          $scope.stockBuy = false;

          $scope.stockbuy = {
            Quantity: null,
            Amount: null
          };
        }
      });
    };

    $http.get("/Stock/checkAccount").success(function(data) {
      if (data.buy == true) {
        $scope.buy = true;
        $scope.notbuy = false;
      } else if (data.buy == false) {
        $scope.buy = false;
        $scope.notbuy = true;
      }
    });

    $scope.findStock = function(value) {
      var deferred = $q.defer();
      if (!value) {
        deferred.reject([]);
      } else {
        var matched = [];
        angular.forEach($scope.stocks, function(e) {
          var re = new RegExp(value, "i");
          if (e.name.match(re) || String(e.id).match(re)) matched.push(e);
        });
        deferred.resolve(matched);
      }
      return deferred.promise;
    };

    //logout
    $scope.logout = function() {
      logoutService.logout();
    };
  })
  .controller("accountController", function(
    $scope,
    $http,
    $location,
    AuthService,
    logoutService,
    $q
  ) {
    $scope.isCollapsed = true;

    console.log("userpage");

    $http.post("/Stock/SearchStock").success(function(data) {
      if (data.state == "success") console.log();
      ////////////////////////////////////////////////////////////getting stock list from the database
      $scope.stocks = data.Stock;
    });
    $scope.findStock = function(value) {
      var deferred = $q.defer();
      if (!value) {
        deferred.reject([]);
      } else {
        var matched = [];
        angular.forEach($scope.stocks, function(e) {
          var re = new RegExp(value, "i");
          if (e.name.match(re) || String(e.id).match(re)) matched.push(e);
        });
        deferred.resolve(matched);
      }
      return deferred.promise;
    };

    //logout
    $scope.logout = function() {
      logoutService.logout();
    };
  })
  .controller("repositoryController", function(
    $scope,
    $http,
    $location,
    AuthService,
    logoutService,
    $q,
    SaleService
  ) {
    $scope.isCollapsed = true;

    $http.get("/Stock/OrderHistory").success(function(data) {
      $scope.orderHistoryData = data.orderHistory;
    });

    $scope.delete = {
      date: null,
      name: null
    };
    $scope.DeleteOrder = function(val) {
      //////////////////// delete the pending order  and the order which is in process it cannot delete

      var deletestock = {
        date: $scope.orderPendingData[val].Date,
        deletename: $scope.orderPendingData[val].StockName
      };
      console.log(deletestock);
      $http.post("/Stock/DeleteOrder", deletestock).success(function(data) {
        if ((data.state = "success")) {
          $scope.OrderPending();
        }
        //////////////////////delete the order
      });
    };

    $scope.stockSale = false;
    $scope.stockSaled = false;

    $scope.stockBuyed = false;
    $scope.orderPending = false;
    $scope.orderHistory = true;
    $scope.stockSaled = false;


    $scope.StockSale = function() {
      $http.get("/Stock/StockSale").success(function(data) {
        $scope.StockSaleData = data.StockSaleData;
      });

      $scope.stockSaled = false;

      $scope.stockSale = true;
      $scope.StockSaledPending = false;
      $scope.stockBuyed = false;
      $scope.orderPending = false;
      $scope.orderHistory = false;
    };
    $scope.StockSaled = function() {

     
       $http.get("/Stock/stockSaled").success(function(data) {
        if ((data.state = "success")) {

          $scope.stockSaledData= data.stockSaledData;
        }
        //////////////////////delete the order
      });
  
      $scope.stockSaled = true;

      $scope.stockSale = false;
      $scope.StockSaledPending = false;
      $scope.stockBuyed = false;
      $scope.orderPending = false;
      $scope.orderHistory = false;
    };

    $scope.stockSaledPending = function() {
      $http.get("/Stock/SaleOrderPending").success(function(data) {
        $scope.SaleorderPending = data.SaleorderPending;
      });

      $scope.stockSale = false;
      $scope.StockSaledPending = true;
      $scope.stockSaled = false;

      $scope.stockBuyed = false;
      $scope.orderPending = false;
      $scope.orderHistory = false;
    };
    $scope.StockBuyed = function() {
      $scope.stockSale = false;
      $scope.StockSaledPending = false;
      $scope.stockSaled = false;

      $scope.stockBuyed = true;
      $scope.orderPending = false;
      $scope.orderHistory = false;
    };
    $scope.OrderPending = function() {
      $http.get("/Stock/OrderPending").success(function(data) {
        $scope.orderPendingData = data.orderPending;
      });

      $scope.stockSale = false;
      $scope.StockSaledPending = false;
      $scope.stockSaled = false;

      $scope.stockBuyed = false;
      $scope.orderPending = true;
      $scope.orderHistory = false;
    };
    $scope.OrderHistory = function() {
      $scope.stockSale = false;
      $scope.StockSaledPending = false;
      $scope.stockSaled = false;

      $scope.stockBuyed = false;
      $scope.orderPending = false;
      $scope.orderHistory = true;
    };

    //
    $scope.SaleOrder = function(index) {
      SaleService.sale($scope.StockSaleData[index]);
    };

    //logout
    $scope.logout = function() {
      logoutService.logout();
    };
  })

  .controller("saleController", function(
    $scope,
    $http,
    $location,
    $q,
    $modalInstance,
    SaleService
  ) {
    $scope.stock = {
      StockName: "",
      Quantity: "",
      Amount: ""
    };
    $scope.error = false;
    $scope.disabled = true;
    var stockdata = SaleService.getData();
    console.log(stockdata.data[0].StockName);

    $scope.stock.StockName = stockdata.data[0].StockName;
    $scope.StockName = stockdata.data[0].StockName;

    var maxValue = stockdata.data[0].Quantity;
    console.log($scope.stock.Quantity);
    $scope.limitCheck = function(event) {
      if (
        $scope.stock.Quantity >= maxValue &&
        event.keyCode >= 48 &&
        event.keyCode <= 57
      ) {
        $scope.stock.Quantity = maxValue;
        event.preventDefault();
      }
    };

    $scope.ok = function() {

      $http.post('/Stock/SaleStock',$scope.stock).success(function(data){
    if(data.state =='success'){
       console.log('ordered placed')
    }
      })
      console.log($scope.stock);
 console.log('your proposed stock for sale has been submitted')
      /////////////////////////////////////////////////////////////sale stock send notification to the admin and 

      //
    };

    $scope.cancel = function() {
      $scope.submit = false;

      $modalInstance.dismiss($scope.submit);
    };
  })
