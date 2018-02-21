const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
      function add()
      {
        if(answer2<answer1)
        {
          console.log(-1);
        }else{
          for(i=answer1;i<=answer2;i++)
          {
          console.log(i);
          rl.close();
           }
        }

      }
      add();
    });
});
