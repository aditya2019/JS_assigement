function alphaNumeric(str)
{
  var reg = /^[A-Za-z0-9]+$/;
  
        if (reg.test(str))
          {
            console.log("yes!! this is the correct alphanumeric value ");
          }
        else
          {
            console.log("please!! enter the valid value");
          }
}

alphaNumeric("37828sad");

