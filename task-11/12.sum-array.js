function sumarray(arr){
var x=arr.reduce((a, b) => a + b, 0);
return x;
}

console.log(sumarray([1,2,3]));
