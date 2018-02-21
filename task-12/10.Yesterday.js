var yesterday =  function(date1)
{
   var dt = new Date(date1);
  
  return new Date((dt.setDate(dt.getDate()-1))).toString();
}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Oct 16, 2015'));
console.log(yesterday('Dec 17, 2016'));
