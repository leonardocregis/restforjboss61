/**
 * @LRegis
 */

angular.module('myapp').controller('ImagesCtr',['$scope','$http',function($scope,$http){
	
		$scope.fotos = [];
		$scope.filtro = '';

		$http.get('rest/posts')
			.success(function(retorno){
				$scope.fotos = retorno;
			})
			.error(function(error){
				console.log(error);
			});

		$scope.remover = function remover(foto){
			var idFoto = $scope.fotos.lastIndexOf(foto);
			console.log(idFoto);
			$http.delete('rest/posts/'+idFoto)
			.success(function(retorno){
				$scope.message = retorno;
				$scope.fotos.splice(idFoto,1);
				
			})
			.error(function(error){
				$scope.message(error);
			});
			
		}
}]);