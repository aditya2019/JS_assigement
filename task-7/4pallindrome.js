var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('', function(input) {
var str = input;
  if(str == str.split('').reverse().join('')){
    console.log("Pallindrome");
  }
  else
  console.log("Not a Pallindrome");
i.close();
 process.stdin.destroy();
});
