function caCode(str)
{
 let reg = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
  
        if (reg.test(str))
          {
            console.log("yes!! you enter the correct canda postal code ");
          }
        else
          {
            console.log("please!! enter the valid code ");
          }
}
caCode("K8V3Y1");
