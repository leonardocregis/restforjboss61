/**
 * 
 */
angular.module('myapp').controller('GruposController', function($scope, $http) {

	$scope.grupos = [];

	$http.get('rest/posts/grupos').success(function(grupos) {
		$scope.grupos = grupos;
	}).error(function(erro) {
		console.log(erro);
	});
});