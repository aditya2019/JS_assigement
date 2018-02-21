function html(str)
{
 var reg = /<([a-z]+) *[^/]*?>/;
  
        if (reg.test(str))
          {
            console.log("yes!! you entered the correct html element");
          }
        else
          {
            console.log("please !! type the valid html tag ");
          }
}
html("<p>");
