var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $scope.day = new Date();
    $(document).ready(function(){
        $("#submit").click(function(){
          if($scope.myType == "current"){
            fetchW($scope.city);
          } else {
            fetchF($scope.city);
          }
        })});
  
  
  function fetchW(city){
  $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=fca7c61230b179435511698551b500e8"+"&units=imperial")
  .then(function(response){ $scope.data = response.data; });
  }

  function fetchF(city){
  $http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=fca7c61230b179435511698551b500e8"+"&units=imperial")
  .then(function(response){ $scope.data = response.data; });
  }

});

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});