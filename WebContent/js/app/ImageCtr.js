/**
 * @author LRegis
 */
angular.module('myapp').controller('ImageCtr',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	
		$scope.foto = {};
		$scope.message = '';
		if ($routeParams.idFoto){
            $http.get('rest/posts/' + $routeParams.idFoto)
            .success(function(foto) {
            	console.log('loaded['+foto+']');
                $scope.foto = foto;
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            });
		}
		
		$scope.submit = function submit(){
			if ($scope.formulario.$valid){
                if($routeParams.idFoto) {
                    $http.put('rest/posts' + $scope.foto._id, $scope.foto)
                    .success(function() {
                        $scope.mensagem = 'Foto alterada com sucesso';

                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alterar';
                    });

                }else{
				   $http.post('rest/posts', $scope.foto)
	                .success(function() {
	                	$scope.foto={};
	                    $scope.mensagem = 'Foto cadastrada com sucesso';
	                })
	                .error(function(erro) {
	                    console.log(erro);
	                    $scope.mensagem = 'Não foi possível cadastrar a foto';
	                });
                }
		    }
		};
		
}]);
