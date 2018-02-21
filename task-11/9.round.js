function round(number, precision) {
  var num = Math.pow(10, precision);
  return Math.round(number * num) / num;
}

console.log(round(1234.5678, 1));
