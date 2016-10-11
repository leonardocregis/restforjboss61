/**
 * @author LRegis
 */
angular.module('myapp').controller('ImageCtr',['$scope','$http','$routeParams','resPicture','cadastroDeFotos',function($scope,$http,$routeParams,resPicture,cadastroDeFotos){
	
		$scope.foto = {};
		$scope.message = '';
		$scope.grupo = '';
		
		if ($routeParams.idFoto){
			resPicture.get( {idFoto:$routeParams.idFoto},function(foto) {
            	console.log('loaded['+foto.grupo+']');
                $scope.foto = foto;
                }
            ,function(erro) {
                console.log(erro);
                $scope.message = 'Não foi possível obter a foto'
            });
		}
		
		$scope.submit = function submit(){
			if ($scope.formulario.$valid){
				 cadastroDeFotos.cadastrar($scope.foto)
			       .then(function(dados) {
	                    $scope.mensagem = dados.mensagem;
	                    if (dados.inclusao) $scope.foto = {};
	                    $scope.focado = true; 
	                })
	                .catch(function(erro) {
	                    $scope.mensagem = erro.mensagem;
	                });
		    }
		};
		
}]);
