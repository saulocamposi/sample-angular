var app = angular.module('app',[])

var bussiness = function($http){
  //return "Hello World";
var value = [];
  value = $http.jsonp("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC&callback=JSON_CALLBACK").then(function(response) {
    console.log("Inside Response " + response.data.high);
     value = response.data;
     return value
  }, function(response){
    return "error";
  });

value.then(function(jsonp){
  console.log("we are here");
  console.log(jsonp.vol)
});
  return value;
}

app.factory('bussiness', ['$http',bussiness]);

var firstController = function($scope, bussiness){
  $scope.hello = 'hello';
  $scope.helloWorld = bussiness;
};

app.controller('firstController',['$scope','bussiness',firstController] );
