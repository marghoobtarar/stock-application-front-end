angular
  .module("mainController", [])
  .controller("mainController", function(
    $scope,
    $http,
    $location,
    $modal,
    $log,
    registerService,
    loginService,
    notificatoinService
  ) {
    $scope.user = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
    //IMAGES
    $scope.Learn = "../images/learn.jpg";
    $scope.Companies = "../images/companies.jpg";
    $scope.new_investor_guidance = "../images/Guidance.jpg";
    $scope.Articles = "../images/article.jpg";
    $scope.Complaint = "../images/complaint.jpg";
    $scope.Media = "../images/media.jpg";
    $scope.regulations = "../images/regulations.jpg";
    $scope.About = "../images/about-us-bg.jpg";
    $scope.Background = "../images/background3.png";

    //END IMAGES

    $scope.isCollapsed = true;
    //login page modal\
    $http.get("/users/login").success(function(data) {
      if (data.state == "success") console.log("congragulation");
    });

    $scope.open_login = function() {
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
    //feedback modal
    $scope.open = function() {
      var modalInstance = $modal.open({
        templateUrl: "../mainPage/signup/modal.html",
        controller: "ModalInstanceCtrl"
      });

      modalInstance.result.then(function(option) {
        if (option == true) {
          console.log($scope.user.username); // getting the user name
          console.log($scope.user.email.toLowerCase()); // getting the user name
          console.log($scope.user.feedback); // getting the user name
          $scope.user = {};
        }
        if (option == false) {
          $scope.user = {};
        }
      });
    };
  })
  .controller("SignUpController", function(
    $scope,
    $http,
    $location,
    $modal,
    $log,
    $modalInstance
  ) {
    $scope.user = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };

    $scope.register_image = "../mainPage/signup/registration.gif";
    console.log($scope.user.email);
    $scope.ok = function() {
      //$http service to send the registered email is already present or not
      $http.post("/register/register", $scope.user).success(function(data) {
        if (data.status == "success") {
          console.log("data entered");
          alert("verify your email please!");
          $modalInstance.close();
        } else {
          $scope.already_registered = data.error;
          console.log(data.error);
        }
      });
      console.log($scope.user.firstname.toLowerCase());
      console.log($scope.user.lastname.toLowerCase());
      console.log($scope.user.email.toLowerCase());
      console.log($scope.user.password);
    };
    $scope.cancel = function() {
      $modalInstance.dismiss();
    };
  })
  .controller("userLoginController", function(
    $scope,
    $http,
    $location,
    $q,
    $modalInstance,
    AuthService
  ) {
    $scope.user = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
    $scope.error = false;
    $scope.disabled = true;

    $scope.ok = function() {
      console.log("in login");
      AuthService.login($scope.user.email.toLowerCase(), $scope.user.password)
        .then(function(person) {
          console.log("login successful");

          if (person == "user") $location.path("/User");
          else if (person == "admin") $location.path("/Admin");

          $modalInstance.close();

          $scope.disabled = false;
        })
        .catch(function() {
          $scope.error_message_login = "you entered wrong email or password";
        });

      //check either the user is available or not

      //
    };

    $scope.cancel = function() {
      $scope.submit = false;

      $modalInstance.dismiss($scope.submit);
    };
  })
  .controller("BlogController", function(
    $scope,
    $http,
    $location,
    loginService,
    registerService,
    notificatoinService
  ) {
    $scope.isCollapsed = true;

    $scope.open_login = function() {
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
  })
  .controller("HelpController", function(
    $scope,
    $http,
    $location,
    loginService,
    notificatoinService,
    registerService
  ) {
    $scope.isCollapsed = true;

    $scope.open_login = function() {
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
  })
  .controller("notificationController", function(
    $scope,
    $http,
    $location,

    $modalInstance
  ) {
    $scope.user = {
      email: ""
    };

    $scope.ok = function() {
      console.log($scope.user.email);
      if ($scope.user.email) {
        console.log("yes im here notify me");
        // $http service to save email and notify the stock whose value is going up

        $modalInstance.close();
        alert("you will be notify on given email thanks!");
      } else {
        $scope.error_notification_message = "please enter the email!";
      }
    };

    $scope.cancel = function() {
      $scope.submit = false;

      $modalInstance.dismiss();
    };
  })
  .controller("ModalInstanceCtrl", function(
    $scope,
    $http,
    $location,
    $modalInstance
  ) {
    $scope.ok = function() {
      $scope.submit = true;
      $modalInstance.close($scope.submit);
    };

    $scope.cancel = function() {
      $scope.submit = false;

      $modalInstance.dismiss($scope.submit);
    };
  })
 
  .controller("learnController", function(
    $scope,
    $http,
    $location,
    loginService,
    registerService,
    notificatoinService,
    $anchorScroll
  ) {
    $scope.isCollapsed = true;
    console.log("yes im here");

    $scope.open_login = function() {
      console.log("open login");
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
    $scope.gotoBottom = function(location) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(location);

      // call $anchorScroll()
      $anchorScroll();
    };
  })
  .controller("companiesController", function(
    $scope,
    $http,
    $location,
    loginService,
    registerService,
    notificatoinService,
    $rootScope
  ) {
    $scope.isCollapsed = true;
    console.log("yes im here");

    $scope.open_login = function() {
      console.log("open login");
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
    $scope.gotoBottom = function(location) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(location);

      // call $anchorScroll()
    };

    $scope.show_companies = function(param) {
      $scope.companies = {
        topCompanies: false,
        HighSharesRates: false,
        LowSharesRates: false,
        Defaulter: false,
        AllCompanies: false,
        FinancialReports: false
      };

      if (param == "topCompanies") $scope.companies.topCompanies = true;
      else if (param == "HighSharesRates") $scope.companies.topCompanies = true;
      else if (param == "LowSharesRates") $scope.companies.topCompanies = true;
      else if (param == "Defaulter") $scope.companies.topCompanies = true;
      else if (param == "AllCompanies") $scope.companies.topCompanies = true;
      else if (param == "FinancialReports")
        $scope.companies.topCompanies = true;
      $http.get("/companies/" + param).success(function(data) {
        if (data.status == "success")
          /* $scope.company.companySymbol = data.symbol;
        $scope.company.companyStock = data.stock;
        $scope.company.companyStockRate = data.rate;
        $scope.company.companyName = data.companyName;
              console.log($scope.company.companyName);
  
  */
          $scope.company = [
            {
              companySymbol: "hbl",
              companyStock: "43",
              companyStockRate: "545345",
              companyName: "habib"
            },
            {
              companySymbol: "BOp",
              companyStock: "4334",
              companyStockRate: "343",
              companyName: "Bank of Punbjab"
            },
            {
              companySymbol: "nsl",
              companyStock: "333",
              companyStockRate: "23423",
              companyName: "nestle"
            },
            {
              companySymbol: "aqa",
              companyStock: "333",
              companyStockRate: "234",
              companyName: "aqua"
            }
          ];
      });
    };
  })
  .controller("newInvestorController", function(
    $scope,
    $http,
    $location,
    loginService,
    notificatoinService,
    registerService,
    $anchorScroll
  ) {
    $scope.isCollapsed = true;

    $scope.open_login = function() {
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
    $scope.gotoBottom = function(location) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(location);

      // call $anchorScroll()
      $anchorScroll();
    };
  })
  .controller("complaintController", function(
    $scope,
    $http,
    $location,
    loginService,
    notificatoinService,
    registerService
  ) {
    $scope.isCollapsed = true;

    $scope.open_login = function() {
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };

    $scope.Complaint = function(type) {
      $scope.user = {
        complaitant: null,
        cnic: null,
        investor: null,
        email: null,
        complain: null
      };

      $scope.complaint = {
        Investor: false,
        Company: false
      };
      if (type == "Investor") {
        $scope.complaint.Investor = true;
      }
      if (type == "Company") {
        $scope.complaint.Company = true;
      }
    };
    $scope.user = {
      complaitant: null,
      cnic: " ",

      investor: null,
      email: null,
      phone: null,
      complain: null
    };
    $scope.company = {
      complaitant: null,
      name: null,

      NationalTaxNumber: null,
      registeratoionNumber: null,
      email: null,
      phone: null,
      complain: null
    };
    $scope.getkeys = function(event) {
      $scope.keyval = event.keyCode;
      if (
        event.keyCode == 8 ||
        event.keyCode == 9 ||
        event.keyCode == 27 ||
        event.keyCode == 13 ||
        (event.keyCode == 65 && event.ctrlKey === true)
      )
        return;
      if (event.keyCode < 48 || event.keyCode > 57) event.preventDefault();

      if (
        ("" + $scope.user.cnic).length == 5 ||
        ("" + $scope.user.cnic).length == 13
      ) {
        console.log((" " + $scope.user.cnic).length);

        $scope.user.cnic = $scope.user.cnic + "-";
      }
    };
    $scope.send = function() {
      $http.post("/complain/investor", $scope.user).success(function(data) {
        if (data.state == "success") {
          console.log("success");
        }
        alert("you will be notify on your email thanks!");

        $scope.user = {
          complaitant: null,
          cnic: " ",

          investor: null,
          email: null,
          phone: null,
          complain: null
        };
      });
    };
    $scope.sendCompany = function() {
      $http.post("/complain/company", $scope.company).success(function(data) {
        if (data.state == "success") {
          console.log("success");
          console.log($scope.company);
        }
        alert("you will be notify on your email thanks!");

        $scope.company = {
          complaitant: null,
          name: null,

          NationalTaxNumber: null,
          registeratoionNumber: null,
          email: null,
          phone: null,
          complain: null
        };
      });
    };
  })
  .controller("usController", function(
    $scope,
    $http,
    $location,
    loginService,
    notificatoinService,
    registerService
  ) {
    $scope.isCollapsed = true;

    $scope.open_login = function() {
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
  })
  .controller("articleController", function(
    $scope,
    $http,
    $location,
    loginService,
    notificatoinService,
    registerService
  ) {
    $scope.isCollapsed = true;

    $scope.open_login = function() {
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
  })
  .controller("mediaController", function(
    $scope,
    $http,
    $location,
    loginService,
    notificatoinService,
    registerService
  ) {
    $scope.isCollapsed = true;

    $scope.open_login = function() {
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
    $scope.totallink = 4;
    $scope.quora =
      "https://www.quora.com/How-can-I-begin-trading-in-Pakistan-Stock-Exchange";
    $scope.pinterest =
      "https://www.pinterest.com/pin/467037423843364039/?lp=true";
    $scope.youtube = "https://www.youtube.com/watch?v=lX4wx8MkLeM";
    $scope.tlink = "https://twitter.com/CapitalStake";
    $scope.videoURL = "https://www.youtube.com/watch?v=XTIGxy7Xdwg";
    $scope.link =
      "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=611975105904525";
  })
  .controller("lawController", function(
    $scope,
    $http,
    $location,
    loginService,
    notificatoinService,
    registerService
  ) {
    $scope.isCollapsed = true;

    $scope.open_login = function() {
      loginService.login();
    };
    //register
    $scope.open_register = function() {
      registerService.signup();
    };
    $scope.open_notification = function() {
      notificatoinService.notify();
    };
  });
