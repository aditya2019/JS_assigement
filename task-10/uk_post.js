function ukPost(str)
{
 let reg = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
  
        if (reg.test(str))
          {
            console.log("yes!!! you have entered a valid a url")
          }
        else
          {
            console.log("sorry !! please enter a valid postal code");
          }
}

ukPost("B294HJ");
