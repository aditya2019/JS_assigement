

var x = Math.floor((Math.random() * (100)));
var y = Math.floor((Math.random() * (100))); 
console.log(x);
console.log(y); 

function factors(num)
{
 var
  n_factors = [],
  i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
  if (num % i === 0)
  {
   n_factors.push(i);
   if (num / i !== i)
    n_factors.push(num / i);
  }
 n_factors.sort(function(a, b){return a - b;});  
 return n_factors;
}


console.log(factors(x)[1]);
console.log(factors(y)[1]);

