var colorApp = angular.module('colorApp', []);

colorApp.controller('SearchController', function($scope) {
  $scope.name = 'Compassites';
  $scope.colors = [{
    name: "red",
    value: "#f00"
  }, {
    name: "green",
    value: "#0f0"
  }, {
    name: "blue",
    value: "#00f"
  }, {
    name: "cyan",
    value: "#0ff"
  }, {
    name: "magenta",
    value: "#f0f"
  }, {
    name: "yellow",
    value: "#ff0"
  }, {
    name: "black",
    value: "#000"
  }];
  
  // Add Color
  $scope.addColor = function (name, value){
    $scope.colors.push({name: name, value:value});
  }
});