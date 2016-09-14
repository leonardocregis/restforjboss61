/**
 * @author LRegis 
 */

angular.module('myapp').controller('ImageCtr',['$scope','$http',function($scope,$http){
		$scope.foto = {};
		$scope.message = '';
		
		$scope.submit = function submit(){
			if ($scope.formulario.$valid){
				console.log('submited');
				$scope.foto= {};
				$scope.message='Imagem cadastrada com sucesso';
			}
		};
		
}]);