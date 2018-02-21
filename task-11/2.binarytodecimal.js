
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your binary number ', (answer1) => {

  var binary = answer1;
  var digit = parseInt(binary, 2);
  console.log("your decimal number is =>  "+ digit);
rl.close();
});
