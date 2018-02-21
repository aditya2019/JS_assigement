var val="a735g"
console.log(check(val));
function check(val) {
  var str = val;
var res = str.replace("7", "T");
var x1 = res.replace("4", "A");
var x2 = x1.replace("5", "S");
var x3 = x2.replace("0", "O");
console.log(x3);
}
