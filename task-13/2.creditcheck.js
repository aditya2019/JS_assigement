
var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('', function(input) {
var str = input;
function validate_creditcardnumber()
{

var re16digit=/^\d{16}$/
if(str.search(re16digit)==-1){

    console.log("incorrect");

     return false;

}
else
{
	console.log("correct");
}}
validate_creditcardnumber();

i.close();
process.stdin.destroy();
});









