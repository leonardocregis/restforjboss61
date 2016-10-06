/**
 * @LRegis
 */

angular.module('myapp').controller('ImagesCtr',['$scope','$http','$resource',function($scope,$http,$resource){
	
		$scope.fotos = [];
		$scope.filtro = '';

		var recursoFoto = $resource('rest/posts/:fotoId');

	    recursoFoto.query(function(fotos) {
	        $scope.fotos = fotos;
	    }, function(erro) {
	        console.log(erro);
	    });

		$scope.remover = function remover(foto){
			var idFoto = $scope.fotos.lastIndexOf(foto);
			console.log(idFoto);
			recursoFoto.delete({fotoId:idFoto},function(){
				$scope.message = foto.titulo + " removed with success";
				$scope.fotos.splice(idFoto,1);
			},function(error){
				$scope.message(error);
			});
			
		}
}]);