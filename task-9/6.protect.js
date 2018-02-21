email = function (user_email)
 {
    var avg, splitted, first, second;

    splitted = user_email.split("@");

    first = splitted[0];

    avg = first.length / 2;

    first = first.substring(0, (first.length - avg));

    second = splitted[1];

    return first + "...@" + second;
};

console.log(email("robin_singh@example.com"));

