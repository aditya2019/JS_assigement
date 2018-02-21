var arr = []
while(arr.length <1)
{
    var randomnumber = Math.floor(Math.random()*100) + 999;

    if(arr.indexOf(randomnumber) > -1) continue;

    arr[arr.length] = randomnumber;

     var value = arr;
     sum = 0;

  while (value) 
{
    sum += value % 10;
    value = Math.floor(value / 10);
}
}
   console.log(arr);
   console.log(sum); 


  

  
