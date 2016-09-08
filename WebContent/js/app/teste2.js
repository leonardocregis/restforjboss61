/**
 * 
 */

function Pessoa(nome) {

   var nome = nome;


   this.getNome = function() {

        return nome;   
   };

   this.setNome= function (nome) {
           nome = nome;
   }
}

var pessoa = new Pessoa('Flávio Almeida');
console.log(pessoa.getNome());
console.log(pessoa.nome);
