function usZipCode(str)
{
var  reg  = /^[0-9]{5}(?:-[0-9]{4})?$/;
  
        if (reg.test(str))
          {
            console.log("yes !! you have entered the correct uszipcode");
          }
        else
          {
           console.log("please !! enter the valid uszip code ");
          }
}

usZipCode("03201-2150");