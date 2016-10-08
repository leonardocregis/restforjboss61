/**
 * @author LRegis
 */
angular.module('myapp').controller('ImageCtr',['$scope','$http','$routeParams','$resource',function($scope,$http,$routeParams,$resource){
	
		$scope.foto = {};
		$scope.message = '';
		$scope.grupo = '';
		var res = $resource('rest/posts/:idFoto');
		if ($routeParams.idFoto){
            res.get( {idFoto:$routeParams.idFoto},function(foto) {
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
                    $http.put('rest/posts/' + $scope.foto.id, $scope.foto)
                    .success(function() {
                        $scope.message = 'Foto alterada com sucesso';

                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.message = 'Não foi possível alterar';
                    });

                }else{
				   res.save( $scope.foto,function() {
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
