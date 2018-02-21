var n = (Math.random() * (100 - 0));
var max = n
var count = 0
var x = 0
var y = 0
while ( count <= max && n > 0){
  var x = (Math.random() * (100 - 0));
  if (x>=y)
  {
  y=x;
  }
  count++;
}
console.log(y);