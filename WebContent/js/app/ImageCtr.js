/**
 * @author LRegis 
 */

angular.module('myapp').controller('ImageCtr',['$scope','$http',function($scope,$http){
		$scope.foto = {};
		$scope.message = '';
		
		$scope.submit = function submit(){
			if ($scope.formulario.$valid){
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
		};
		
}]);