"use strict";

var app = angular
  .module("stockApp", [
    "ngRoute",
    "ngResource",
    "ui.bootstrap",
    "ui.router",
    "ngtweet",
    "ngYoutubeEmbed",
    "incSearch",
    "movieService",
    "factory",
    "userController",
    "adminController",
    "mainController",
    "chart.js",
    "ng-fusioncharts",
  ])

  .config(function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    $urlMatcherFactoryProvider
  ) {
    $urlMatcherFactoryProvider.caseInsensitive(true);

    $stateProvider
      .state("/", {
        url: "/",
        templateUrl: "mainPage/home.html",
        controller: "mainController"
      })

      .state("tomain", {
        url: "",
        templateUrl: "mainPage/home.html",

        controller: "mainController"
      })
      .state("main", {
        url: "/",
        templateUrl: "mainPage/home.html",

        controller: "mainController"
      })

      .state("Login", {
        url: "/Login",
        templateUrl: "mainPage/Login/Login.html",
        controller: "userLoginController"
      })
      .state("SignUp", {
        url: "/SignUp",
        templateUrl: "./mainPage/Signup/SignUp.html",
        controller: "SignUpController"
      })
      .state("Blog", {
        url: "/Blog",
        templateUrl: "./mainPage/Blog/Blog.html",
        controller: "BlogController"
      })
      .state("Notification", {
        url: "/Notification",
        templateUrl: "./mainPage/notification/notification.html",
        controller: "notificationController"
      })
      .state("Help", {
        url: "/Help",
        templateUrl: "./mainPage/Help/Help.html",
        controller: "HelpController"
      })
      .state("learn_stock_market", {
        url: "/Learn",
        templateUrl: "./mainPage/Learn_Stock_Market/learnStockMarket.html",
        controller: "learnController"
      })
      .state("Companies", {
        url: "/Companies",
        templateUrl: "./mainPage/Companies/Companies.html",
        controller: "companiesController"
      })
      .state("new_Investor", {
        url: "/Naive",
        templateUrl:
          "./mainPage/New_Investor_guidance/newInvestorGuidance.html",
        controller: "newInvestorController"
      })
      .state("Media", {
        url: "/Media",
        templateUrl: "./mainPage/Articles_Media/Media.html",
        controller: "mediaController"
      })
      .state("Complaint", {
        url: "/Complaint",
        templateUrl: "./mainPage/Complaint_Feedback/Complaints.html",
        controller: "complaintController"
      })
      .state("Laws", {
        url: "/Laws",
        templateUrl: "./mainPage/Regulations/Laws.html",
        controller: "lawController"
      })
      .state("aboutUs", {
        url: "/Us",
        templateUrl: "./mainPage/About_us/Us.html",
        controller: "usController"
      })
      .state("Article", {
        url: "/Article",
        templateUrl: "./mainPage/Articles_Media/Article.html",
        controller: "articleController"
      })
      //user controllers
      .state("User", {
        url: "/User",
        templateUrl: "./user/userHomepage/home.html",
        controller: "userHomeController",
        resolve: {
          security: [
            "checkLoginService",
            function(checkLoginService) {
              checkLoginService.checkStatus();
            }
          ]
        }
      })
      .state("account", {
        url: "/Account",
        templateUrl: "/user/account.html",
        controller: "accountController",
        resolve: {
          security: [
            "checkLoginService",
            function(checkLoginService) {
              checkLoginService.checkStatus();
            }
          ]
        }
      }).state("Stocks", {
        url: "/Stocks/:val",
        templateUrl: "/user/Stock.html",
        controller: "stockController",
        resolve: {
          security: [
            "checkLoginService",
            function(checkLoginService) {
              checkLoginService.checkStatus();
            }
          ]
        }
      }).state("Repository", {
        url: "/Repository",
        templateUrl: "/user/Repository.html",
        controller: "repositoryController",
        resolve: {
          security: [
            "checkLoginService",
            function(checkLoginService) {
              checkLoginService.checkStatus();
            }
          ]
        }
      }).state("Sale", {
        url: "/Sale",
        templateUrl: "/user/sale.html",
        controller: "saleController",
        resolve: {
          security: [
            "checkLoginService",
            function(checkLoginService) {
              checkLoginService.checkStatus();
            }
          ]
        }
      })
      //admin controllers
      .state("Admin", {
        url: "/Admin",
        templateUrl: "./admin/home.html",
        controller: "adminHomeController",
        resolve: {
          security: [
            "checkAdminLoginService",
            function(checkAdminLoginService) {
              checkAdminLoginService.checkStatus();
            }
          ]
        }
      });

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(false).hashPrefix("");
  })
  .run(function(AuthService, $rootScope, $location) {
    $rootScope.$on("$locationChangeSuccess", function(event, current) {
      AuthService.getUserStatus();

      var absUrl = $location.absUrl();
      console.log("route change");
      console.log(absUrl);
    });
  });
/*.run(function ( $rootScope, $state, AuthService,$location,$route) {
    console.log('checking status')
    
    $rootScope.$on('$locationChangeStart',
      function (event, toState, toParams, fromState, fromParams) {
console.log('check')
        AuthService.getUserStatus()
        .then(function($scope,){
          console.log('checking status1')
          if ( !AuthService.isLoggedIn()){
            $location.path('/');
            $route.reload();
          }
        }) .catch(function($scope) {
          $scope.error = true;
          console.log('ERROR')
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });
    });
  }) */
////////////////////////////////////******************************* */directives***************************************************////////

//////////////////////////////////********************************* */services  ***************************************************////////
//register service

//end services

//main page controller

/*   */
