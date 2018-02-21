function hexadecimal(str)
{
  var reg = /^[0-9a-fA-F]+$/;
  
        if (reg.test(str))
          {
           console.log("yes !! you enter a vaild hexdecimal number");
          }
        else
          {
            console.log("you enter a wrong color");
          }
}

hexadecimal("ffffff");