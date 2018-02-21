var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('', function(input) {
var str = input;
var str1 = str.replace(/,/g,"");
var arr=str1.split("");
var output = arr.reduce(sum);
function sum (previousValue, currentValue) {
    return parseInt(previousValue) + parseInt(currentValue);
    }
console.log(output);
i.close();
 process.stdin.destroy();
});
