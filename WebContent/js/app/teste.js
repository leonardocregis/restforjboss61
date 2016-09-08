  

var stack = new (function Stack() {
    var array = [],
        index = -1;
        
    return {
      push: function (value) {
        array[index += 1] = value
      },
     pop: function () {
       var value = array[index];
       if (index >= 0) {
         index -= 1
       }
       return value
     },
     isEmpty: function () {
       return index < 0
     }
   }
 });
 
console.log(stack.isEmpty());
stack.push('hello');
stack.push('JavaScript');
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
