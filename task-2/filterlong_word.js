function filterLongWords(arr, i){
    var q = [], 
        k = 0;

    arr.map(function(p, c){
        if(p.split('').length > i) q[k++] = p;
    });

    return q;
}

var words = ["priyanshi", "shyam", "aaditya", "ashutosh"];
    int = 5;
    x = filterLongWords(words, int);

x.map(function(item, index){
    console.log( item);
});