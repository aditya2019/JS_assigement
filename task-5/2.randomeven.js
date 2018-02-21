var arr = []
while(arr.length < 99){
    var randomnumber = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
console.log(arr);
console.log("even number only");
for(i=0;i<arr.length;i++)
{
  if(arr[i]%2==0)
  {
  console.log("even number =" + arr[i]);
  }
}





