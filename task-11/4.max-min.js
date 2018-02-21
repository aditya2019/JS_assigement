function maxmin(arr){
  var max = arr.reduce(function(a, b) {
      return Math.max(a, b);
  });
  var min = arr.reduce(function(a, b) {
      return Math.min(a, b);
  });
  console.log("Max number: " + max);
  console.log("Min number: " + min);
}

maxmin([2,60,1,23,9]);
