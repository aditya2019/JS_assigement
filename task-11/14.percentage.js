var number = 5000;
var percentX = 12;
var result;

function percent(number, percentx){
  var output = (parseFloat(number)*parseFloat(percentx))/100;
  return parseFloat(output);
}

console.log(percent(100, 12));
