var week =  function(date1)
{
    var date = new Date(date1);
     
    if(date.getDay() == 6 || date.getDay() == 0)
       {
        return "weekend";
        } 
}

console.log(week('Nov 15, 2014'));
console.log(week('Nov 16, 2014'));
console.log(week('Nov 17, 2014'));
