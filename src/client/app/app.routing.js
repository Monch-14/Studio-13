(function() {
  angular
    .module('app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl : 'app/home/home.html'
        })
        .when('/paquetes', {
          templateUrl : 'app/paquetes/paquetes.html'
        })
        .when('/tomato', {
          template: '<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>'
        });
    });
})();
