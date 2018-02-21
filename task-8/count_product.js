function count_multiply(input ){
	var sum =0;
	var product=1;
	for (var i=0;i<input.length;i++){
		sum=sum+input[1];
		product =product*input[i];

	}
	console.log("sum :" + sum +" product:" + product);
}
var input = [1,2,3,4];
count_multiply(input);