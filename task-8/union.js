function union (input1, input2)
{

var add = input1.concat(input2);
	var small = add.sort( function (a,b){
		return a-b });
	var n = small.length;
	var j =0;
	for (var i=0;i<small.length;i++)
	{
		if (small[i ] != small[i+1])
		{
			small[j] = small[i];
			j++
		}
	}
	small[j] =small[n-1];
	console.log(small);
	
	}
 
 var  input1 = [1,2,3];
 var input2 = [100, 2, 1, 10];
 union(input1, input2);
 
