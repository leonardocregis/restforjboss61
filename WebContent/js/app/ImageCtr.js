/**
 * @author LRegis
 */
angular.module('myapp').controller('ImageCtr',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	
		$scope.foto = {};
		$scope.message = '';
		$scope.grupo = '';
		if ($routeParams.idFoto){
            $http.get('rest/posts/' + $routeParams.idFoto)
            .success(function(foto) {
            	console.log('loaded['+foto.grupo+']');
                $scope.foto = foto;
            })
            .error(function(erro) {
                console.log(erro);
                $scope.message = 'Não foi possível obter a foto'
            });
		}
		$scope.count = 0;
		$scope.submit = function submit(){
			if ($scope.formulario.$valid){
                if($routeParams.idFoto) {
                    $http.put('rest/posts/' + $scope.foto.id, $scope.foto)
                    .success(function() {
                        $scope.message = 'Foto alterada com sucesso'+$scope.count++;
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.message = 'Não foi possível alterar';
                    });

                }else{
				   $http.post('rest/posts', $scope.foto)
	                .success(function() {
	                	$scope.foto={};
	                    $scope.message = 'Foto cadastrada com sucesso';
	                })
	                .error(function(erro) {
	                    console.log(erro);
	                    $scope.message = 'Não foi possível cadastrar a foto';
	                });
                }
		    }
		};
		
}]);
