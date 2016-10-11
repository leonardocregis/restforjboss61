/**
 * @LRegis 
 */

 angular.module('myservices', [ 'ngResource' ]).factory('resPicture',
		function($resource) {

	 		return $resource('rest/posts/:idFoto', null, {
				'update' : {
					method : 'PUT'
				}
			});
		}
 ).factory('cadastroDeFotos',function(resPicture,$q){
	 	
 });