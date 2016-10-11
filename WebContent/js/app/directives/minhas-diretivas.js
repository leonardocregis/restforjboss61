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

myDirectives.directive('meuBotaoRemover',function (){
	
	 var ddo = {};
     ddo.restrict = "E";
     ddo.scope = {
         nome: '@',
         acao : '&'
     }
     ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
     return ddo;
});

myDirectives.directive('meuFocus',function(){
	var ddo ={};
	ddo.restrict='A';
	ddo.scope={};
	return ddo;
});