function sum (x)
{ 
	var total =0;
	for (var i =0; i<x.length ;i++)
	{
	 
	  total = total + x[i];
	}
	 console.log("sum :" + " " + total);
	
}
function multiply (x)
{
	var total =1;
	for (var i =0; i<x.length ;i++)
	{
	
	  total = total* x[i];
	}
	 console.log("multiply :" + " " + total);
	}
 var x= [1,2,3,4];
 sum(x);
 multiply(x);