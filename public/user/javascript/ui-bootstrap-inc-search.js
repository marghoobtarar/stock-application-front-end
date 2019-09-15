angular.module("incSearch", []).directive("incSearch", ['$http','$location',function($http,$location) {
  return {
    restrict: "E",
    
    require: "ngModel",
    link: function(scope, elem, attrs, ctrl) {
      var incSearcher = $(elem).attr("inc-searcher");
      var incSelectedLabel = $(elem).attr("inc-selected-label");
      var incItemLabel = $(elem).attr("inc-item-label");
      var width = $(elem).attr("width");

  
      var $dropDown = $('<div class="dropdown ">');
      var $searchText = $('<input type="text" class="form-control "  id="dataStock" placeholder="Search"/>');
      var $dropdownMenu = $('<ul class="dropdown-menu">');
      $(elem)
        .append($dropDown.append($searchText).append($dropdownMenu));

      var deffered = null;

      $searchText
        .bind("keyup", function() {

          var value = $searchText.val();
          var promise = scope[incSearcher](value);
          promise.then(
            function(items) {
              applyItems(items);
            },
            function() {

              $dropDown.removeClass("open");
            }
          );
        })
        $dropdownMenu.on("click", function(e) {
         // var classname = e.target.className;
        
          var value = document.getElementById(e.target.id).innerHTML;
          
          scope[attrs.ngModel] = $(this).data();

              $dropDown.removeClass("open");
      
       


          
          $searchText
           
            .text(scope.$eval(incSelectedLabel))
            .end()
            .show();
            $searchText.val(value);

            console.log('sending request')
            $http.post('/searchStock/stockEntity').success(function(data){
              if(data.state=='success'){
                console.log('status is successful')
              }
            })
            scope.individualStockDetail=true
            scope.stockList = false
            $location.path('/Stocks/'+value)

          scope.$apply();
        });
   
  scope.stock=function(val){
    console.log('clicked value is '+val)

    $location.path('/Stocks/'+val)


  }
    
        /*
            $searchText.bind("blur", function() {
          if (!$dropdownMenu.is(":hover")) {
            $dropDown.removeClass("open");
          }
        })
     

      */
     


      scope.$watch(attrs.ngModel, function(value) {
        if (!value) return;

     $searchText
         
          .text(scope.$eval(incSelectedLabel))
          .end()
          .show();
      });

      function applyItems(items) {
        var a = 0;

        $dropdownMenu.find("li").remove();
        if (0 < items.length) {
          $dropDown.addClass("open");
        } else {
          $dropDown.removeClass("open");
        }
        angular.forEach(items, function(item) {
          item.__incCreateName = function() {
            return eval(incItemLabel);
          };
          var label = item.__incCreateName();
          a++;
          $dropdownMenu.append(
          
            $("<li>").append(
              $("<a class='link' id='link'>")
                .text(label)
                .data(item)
                .attr('id',a)
            )
          );
        });
      }
    }
  };
}])