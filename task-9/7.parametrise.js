input = function (str1) 
{
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};

console.log(input("Robin Singh from USA."));
