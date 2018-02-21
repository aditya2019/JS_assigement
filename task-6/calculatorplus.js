const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
      rl.question('Please enter the operation : ', (answer3) => {

// ehreeee
function add(x,y) {
  var a = parseInt(x) + "<br>";
  var b = parseInt(y)
console.log(a+b);
}

function divide(x,y) {
console.log(x-y);
}

function processUserInput(callback) {
if(answer3=="add")
{
  add(answer1,answer2);
}
else if (answer3 =="divide") {
  divide(answer1,answer2);
}
else{
console.log("plz Enter valid operation");
}
// console.log(callback(x,y));
}

processUserInput(answer3);
console.log(answer3);
      });
    });
});
