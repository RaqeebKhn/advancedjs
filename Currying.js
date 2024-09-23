// Currying is a function that takes multiple arguments and returns a new function with fewer arguments.

function add(a) {
    return function(b) {
      return a + b;
                };
             }
const addFive = add(5);
console.log(addFive(3)); 
  
  