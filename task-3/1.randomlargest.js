var arr = []
while(arr.length < 3)
{
    var randomnumber = Math.floor(Math.random()*100) + 1;

    if(arr.indexOf(randomnumber) > -1) continue;

    arr[arr.length] = randomnumber;

    var largest= Math.max.apply(0,arr)
}
   console.log(arr);

   console.log(largest);

