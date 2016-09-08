var aplicativo = angular.module('myapp',['minhasDiretivas','ngAnimate','ngRoute'])
.config(function($routeProvider){
	
	$locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'minhasDiretivas'
    });
    

    $routeProvider.otherwise({redirectTo: '/fotos'});e
});