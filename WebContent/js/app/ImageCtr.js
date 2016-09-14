/**
 * @author LRegis 
 */

angular.module('myapp').controller('ImageCtr',['$scope','$http',function($scope,$http){
		$scope.foto = {};
		$scope.submit = function submit(){
			if ($scope.formulario.$valid){
				console.log('submitting');
			}
		};
		
}]);