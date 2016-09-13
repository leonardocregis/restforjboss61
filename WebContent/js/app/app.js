var aplicativo = angular.module('myapp',['ngAnimate','ngRoute','minhasDiretivas'])
.config(function($routeProvider){
	
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'ImagesCtr'
    });
    
    $routeProvider.when('/fweotos/new', {
        templateUrl: 'partials/foto.html'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});
});