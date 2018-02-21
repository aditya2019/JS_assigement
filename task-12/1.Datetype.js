var isdate = function(input) {
  if ( Object.prototype.toString.call(input) === "[object Date]" )
    return true;
  return false;
    };

    console.log(isdate(new Date(86400000)));
