// Memoization is an optimization technique to store the results of expensive function calls.

const factorial = memoize(function(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  });
  console.log(factorial(5));  
  console.log(factorial(5));
  