/**
 * @author LRegis
 */
angular.module('myapp').controller('ImageCtr',['$scope','$http','$routeParams','resPicture',function($scope,$http,$routeParams,resPicture){
	
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
                if($routeParams.idFoto) {
                	resPicture.update({idFoto:$routeParams.idFoto}, $scope.foto,function() {
                        $scope.message = 'Foto alterada com sucesso';
                    },function(erro) {
                        console.log(erro);
                        $scope.message = 'Não foi possível alterar';
                    });

                }else{
                	resPicture.save( $scope.foto,function() {
	                	$scope.foto={};
	                    $scope.message = 'Foto cadastrada com sucesso';
	                },function(erro) {
	                    console.log(erro);
	                    $scope.message = 'Não foi possível cadastrar a foto';
	                });
                }
		    }
		};
		
}]);
