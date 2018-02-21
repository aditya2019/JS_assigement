
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your Decimal number ', (answer1) => {

  var str = answer1;
  var bin = (+str).toString(2);
  console.log("yout binary number is ==> "+ bin)

});
