const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name ', (answer1) => {

  var x=answer1;
  var sln = x.length;

  var m=1;
  var y=0;
  while(m<=sln)
  {

  for(i=1;i<=sln;i++)
  {
  var res = x.slice(y, i);
  console.log(res);
  }
  m=m+1;
  y=y+1;
  }

});
