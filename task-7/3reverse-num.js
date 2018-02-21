var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('', function(input) {
var num = parseInt(input);
var reversenum = 0;
while( num != 0 )
  {
    reversenum = reversenum * 10;
         reversenum = reversenum + num%10;
         num = Math.trunc(num/10);
   }
   console.log(reversenum);
i.close();
 process.stdin.destroy();
});
