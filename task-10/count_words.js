var names = 'Hello thsi the world of javascript ';

console.log(names);

var re = /\s* \s*/g;
var nameList = names.split(re);

console.log(nameList.length-1);