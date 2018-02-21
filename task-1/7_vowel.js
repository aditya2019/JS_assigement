function word(c){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    if(vowels.indexOf(c, 0) === -1) return false;
    return true;

}

var chr = 'a',
    x = word(chr);

console.log(x);
