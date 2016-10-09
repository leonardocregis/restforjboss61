/**
 * @LRegis 
 */

 angular.module('myResources', [ 'ngResource' ]).factory('resPicture',
		function($resource) {

			return $resource('rest/posts/:idFoto', null, {
				'update' : {
					method : 'PUT'
				}
			});
		});