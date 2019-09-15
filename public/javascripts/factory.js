angular
  .module("factory", [])
  .factory("registerService", function($location, $rootScope, $http, $modal) {
    return {
      //define register service
      signup: function() {
        var modalInstance = $modal.open({
          templateUrl: "../mainPage/Signup/signup.html",
          controller: "SignUpController"
        });

        modalInstance.result.then(function(option) {
          // place this data in login controller
          if (option == true) {
            //$http service will check either the user is available or not or either the password is correct or not

            $scope.user = {};
          }
          if (option == false) {
            $scope.user = {};
          }
        });
      }
    };
  })
  .factory("loginService", function($location, $rootScope, $http, $modal) {
    return {
      login: function() {
        var modalInstance = $modal.open({
          templateUrl: "../mainPage/Login/login.html",
          controller: "userLoginController"
        });

        modalInstance.result.then(function(option) {
          // place this data in login controller
          if (option == true) {
            //$http service will check either the user is available or not or either the password is correct or not

            $scope.user = {};
          }
          if (option == false) {
            $scope.user = {};
          }
        });
      }
    };
  })
  .factory("notificatoinService", function(
    $location,
    $rootScope,
    $http,
    $modal
  ) {
    return {
      notify: function() {
        var modalInstance = $modal.open({
          templateUrl: "../mainPage/notification/notification.html",
          controller: "notificationController"
        });

        modalInstance.result.then(function(option) {
          // place this data in login controller
          if (option == true) {
            //$http service will check either the user is available or not or either the password is correct or not

            $scope.user = {};
          }
          if (option == false) {
            $scope.user = {};
          }
        });
      }
    };
  })
  .factory("AuthService", [
    "$q",
    "$timeout",
    "$http",
    function($q, $timeout, $http) {
      // create user variable
      var user = null;
      var userType = null;

      // return available functions for use in the controllers
      return {
        isLoggedIn: isLoggedIn,
        getUserStatus: getUserStatus,
        login: login,
        logout: logout
      };

      function isLoggedIn() {
        if (user) {
          return { user, userType };
        } else {
          return false;
        }
      }
      function getUserStatus() {
        return (
          $http
            .get("/user/status")
            // handle success
            .success(function(data) {
              if (data.status == "success") {
                user = true;
                userType = data.person;
                console.log(user, userType); // it will get the user type see red diary FOR THE detail page number 15
              } else {
                console.log("getuserStatus");
                user = false;
                console.log(user);
              }
            })
            // handle error
            .error(function(data) {
              user = false;
              userType = null;
            })
        );
      }

      function login(username, password) {
        // create a new instance of deferred
        var deferred = $q.defer();
        // send a post request to the server
        $http
          .post("/user/login", { username: username, password: password })
          // handle success
          .success(function(data, status) {
            console.log(username, password);
            if (data.status == "success") {
              console.log("in auth login1"); // not working

              user = true;
              deferred.resolve(data.person);
            } else {
              user = false;
              deferred.reject();
            }
          })
          // handle error
          .error(function(data) {
            user = false;
            deferred.reject();
          });

        // return promise object
        return deferred.promise;
      }

      function logout() {
        // create a new instance of deferred
        var deferred = $q.defer();

        // send a get request to the server
        $http
          .get("/user/logout")
          // handle success
          .success(function(data) {
            if (data.status == "success") {
              console.log("yes success");
              user = false;
              deferred.resolve();
            }
          })
          // handle error
          .error(function(data) {
            user = false;
            deferred.reject();
          });

        // return promise object
        return deferred.promise;
      }
    }
  ])
  .factory("checkLoginService", function(
    $location,
    $rootScope,
    $http,
    AuthService,
    $q,
    $window
  ) {
    return {
      checkStatus: function() {
        console.log("checking the status");
        AuthService.getUserStatus().then(function() {
          var user = AuthService.isLoggedIn();
          console.log(user);
          if (!user.user || user.userType == "admin") {
            console.log("login");
            $window.location.assign("/");
          } else {
            return $q.resolve();
          }
        });
      }
    };
  })
  .factory("checkAdminLoginService", function(
    $location,
    $rootScope,
    $http,
    AuthService,
    $q,
    $window
  ) {
    return {
      checkStatus: function() {
        console.log("checking the status");
        AuthService.getUserStatus().then(function() {
          var user = AuthService.isLoggedIn();
          console.log(user);
          if (!user.user || user.userType == "user") {
            console.log("login");
            $window.location.assign("/");
          } else {
            return $q.resolve();
          }
        });
      }
    };
  })
  .factory("logoutService", function(
    $location,
    $rootScope,
    $http,
    AuthService,
    $q,
    $window
  ) {
    return {
      logout: function() {
        console.log("yes loguot service called");

        AuthService.logout()
          .then(function() {
            console.log("logout successful");
            $location.path("");
          })
          .catch(function() {});
      }
    };
  })
  .factory("searchService", function(
    $location,
    $rootScope,
    $http,
    AuthService,
    $q,
    $window
  ) {
    return {
      search: function(value) {
        var deferred = $q.defer();
        if (!value) {
          deferred.reject([]);
        } else {
          var matched = [];
          angular.forEach($rootScope.stocks, function(e) {
            var re = new RegExp(value, "i");
            if (e.name.match(re) || String(e.id).match(re)) matched.push(e);
          });
          deferred.resolve(matched);
        }
        return deferred.promise;
      }
    };
  })
  .factory("SaleService", function($location, $rootScope, $http, $modal) {
    var stockdata = [];
 
    var getData = function() {
      return {
        data: stockdata
      };
    };
    return {
      sale: function(data) {
        stockdata = [];
       stockdata.push(data)

        console.log(data);
        var modalInstance = $modal.open({
          templateUrl: "../user/sale.html",
          controller: "saleController",

        });

        modalInstance.result.then(function(option) {
          // place this data in login controller
          if (option == true) {
            //$http service will check either the user is available or not or either the password is correct or not

            $scope.user = {};
          }
          if (option == false) {
            $scope.user = {};
          }
        });
      },
      getData: getData
    };
  });
