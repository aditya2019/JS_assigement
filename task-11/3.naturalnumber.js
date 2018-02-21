function natural(num)
{
   regexp = /^[1-9]/;

   if (regexp.test(num))
    {
      console.log("true");
    }
    else
    {
      console.log("false");
    }
}
natural(-464);
