function isDecimal(value){
  if(value % 1 === 0){
    return "No does not have Decimal part";
  }
  else
return "No have Decimal part";
}

console.log(isDecimal(7.87));
