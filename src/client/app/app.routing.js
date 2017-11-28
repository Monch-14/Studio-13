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
        .when('/Smoking', {
          templateUrl : 'app/Smoking/Smoking.html'
        })
        .when('/fotografia', {
          templateUrl : 'app/fotografia/fotografia.html'
        })
        .when('/paquete', {
          templateUrl : 'app/paquete/paquete.html', 
          controller: PaqueteController, 
          controllerAs: 'vm'
        });

      });
})();
