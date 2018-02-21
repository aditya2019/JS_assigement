output = function(input)
 {
  if 
  	(Object.prototype.toString.call(input) === '[object String]')
    return true;
  else
    return false;   
    };

console.log(output('w3resource'));
console.log(output([1, 2, 4, 0]));