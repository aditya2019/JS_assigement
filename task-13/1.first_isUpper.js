function upperletter(str)
{
   regexp = /^[A-Z]/;
   
   if (regexp.test(str))
    {
      console.log("uppercase");
    } 
    else
    {
      console.log("not uppercase");
    }
}
upperletter('Abcd');
upperletter('abcd');
