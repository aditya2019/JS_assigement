function decimals(num, decimal) {
 if ((typeof num !== 'number') || (typeof decimal !== 'number'))
   return false;
    	num = parseFloat(num) || 0;
	return num.toFixed(decimal);
	}
console.log(decimals(4.1005, 23));
