function translate(str){
    var q = '';

    str.split("").map(function(p, c){
        if(p != ' ') q += p + 'o' + p;
            else q += ' ';
    });

    console.log(q);
}

var phrase = 'this is fun',
    x = translate(phrase);

