var aplicativo = angular.module('myapp',['ngAnimate','ngRoute','minhasDiretivas','ngResource','myservices'])
.config(function($routeProvider){
	
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'ImagesCtr'
    });
    
    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'ImageCtr'
    });

    $routeProvider.when('/fotos/edit/:idFoto', {
        templateUrl: 'partials/foto.html',
        controller: 'ImageCtr'
    });

    
    $routeProvider.otherwise({redirectTo: '/fotos'});

});