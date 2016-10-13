/**
 * 
 */

var myDirectives = angular.module('minhasDiretivas',['myservices']).directive('meuPainel',function (){
	
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
	ddo.scope={
			focado:'='
	};
	ddo.link=function(scope,element){
		scope.$on('fotoCadstrada',function(){
				element[0].focus();
		});
	};
	return ddo;
});

myDirectives.directive('meusTitulos',function(){
	var ddo={};
	ddo.restrict = 'E';
	ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
	ddo.controller=function($scope,resPicture){
		resPicture.query(function(fotos) {
              $scope.titulos = fotos.map(
            		  function(foto) {
            			  	return foto.titulo;
            		  });    
		  });
	}
    return ddo;
});