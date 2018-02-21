name = function (str1)
 {
    var split_value = str1.trim().split(" ");

    if (split_value.length > 1)
     {
       return (split_value[0] + " " + split_value[1].charAt(0) + ".");
    }
    return split_value[0];
};
console.log(name("Robin Singh"));
