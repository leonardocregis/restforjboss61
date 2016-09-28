/**
 * 
 */

var myDirectives = angular.module('minhasDiretivas',[]).directive('meuPainel',function (){
	
	var ddo = {};
	ddo.restrict= 'AE';
	ddo.scope = { titulo : '@'};
	ddo.transclude=true;
	ddo.templateUrl = 'js/app/directives/meu-painel.html';
	return ddo;
});

myDirectives.directive('minhaFoto',function (){
	
	var ddo = {};
	ddo.restrict= 'AE';
	ddo.scope = { titulo : '@',url:'@'};
	ddo.templateUrl = 'js/app/directives/minha-foto.html';
	return ddo;
});