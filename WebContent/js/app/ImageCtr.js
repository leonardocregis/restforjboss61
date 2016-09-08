/**
 * @LRegis
 */

angular.module('myapp').controller('ImageCtr',['$scope','$http',function($scope,$http){
	
		$scope.fotos = [];
		$scope.filtro = '';

		$http.get('rest/posts')
			.success(function(retorno){
				console.log(retorno[1]);
				$scope.fotos = retorno;
			})
			.error(function(error){
				console.log(error);
			});
		
}]);