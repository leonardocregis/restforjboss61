/**
 * @LRegis 
 */

 angular.module('myservices', [ 'ngResource' ]).factory('resPicture',
		function($resource) {

			return $resource('rest/posts/:fotoId', null, {
				'update' : {
					method : 'PUT'
				}
			});
		});