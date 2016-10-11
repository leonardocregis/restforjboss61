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
 ).factory('cadastroDeFotos',
		function(resPicture,$q){
	 		var service = {};
	 		service.cadastrar = function(foto){
	 			return $q(function(resolve, reject) {

	                if(foto.id) {
	                	resPicture.update({idFoto: foto.id}, foto, function() {
	                        resolve({
	                            mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
	                            inclusao: false
	                        });
	                    }, function(erro) {
	                        console.log(erro);
	                        reject({
	                            mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
	                        });
	                    });

	                } else {
	                	resPicture.save(foto, function() {
	                        resolve({
	                            mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
	                            inclusao: true
	                        });
	                    }, function(erro) {
	                        console.log(erro);
	                        reject({
	                            mensagem: 'Não foi possível incluir a foto ' + foto.titulo
	                        });
	                    });
	                } 
	 		});
 		}
	 	return service;
 });