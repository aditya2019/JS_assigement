const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question('Please enter yout items ', (answer1) => {

 var x=answer1;
 test(x)
  function test(take)
 {
 var y=take.split(" ");

 var items = [];
 for(i=0;i<y.length;i++)
 {
   items.push(y[i]);
 }
 console.log(items);

 }

});

const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question('Please enter yout items ', (answer1) => {

 var x=answer1;
 test(x)
  function test(take)
 {
 var y=take.split(" ");

 var items = [];
 for(i=0;i<y.length;i++)
 {
   items.push(y[i]);
 }
 console.log(items);

 }

});
