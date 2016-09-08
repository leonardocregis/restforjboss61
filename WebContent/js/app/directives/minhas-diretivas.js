/**
 * 
 */

angular.module('minhasDiretivas',[]).directive('meuParagrafo',function (){
	
	var ddo = {};
	ddo.restrict= 'AE';
	ddo.scope = { titulo : '@'};
	ddo.transclude=true;
	ddo.templateUrl = 'js/app/directives/meu-painel.html';
	return ddo;
});