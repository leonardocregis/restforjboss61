/**
 * @LRegis
 */

angular.module('myapp').controller('ImagesCtr',['$scope','$http','resPicture',function($scope,$http,resPicture){
	
		$scope.fotos = [];
		$scope.filtro = '';


		resPicture.query(function(fotos) {
	        $scope.fotos = fotos;
	    }, function(erro) {
	        console.log(erro);
	    });

		$scope.remover = function remover(foto){
			var idFoto = $scope.fotos.lastIndexOf(foto);
			resPicture.delete({idFoto:idFoto},function(){
				$scope.message = foto.titulo + " removed with success";
				$scope.fotos.splice(idFoto,1);
			},function(error){
				$scope.message(error);
			});
			
		}
}]);