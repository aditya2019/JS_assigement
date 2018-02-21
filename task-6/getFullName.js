const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your first name : ', (answer1) => {
    rl.question('Please enter your second number : ', (answer2) => {
      console.log("your full Name is => ");
      var res = answer1.concat(answer2);
      console.log(res);
    });
});
