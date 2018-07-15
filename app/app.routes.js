(function(){
  angular
    .module("blockchainApp")
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<homepage />'
        })
    })
})();