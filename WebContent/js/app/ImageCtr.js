/**
 * @author LRegis 
 */

angular.module('myapp').controller('ImageCtr',['$scope','$http',function($scope,$http){
	
		$scope.fotos = [];
		$scope.filtro = '';

		$http.post('rest/posts')
			.success(function(retorno){
				$scope.fotos = retorno;
			})
			.error(function(error){
				console.log(error);
			});
		
}]);