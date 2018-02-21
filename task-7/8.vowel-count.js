function countVowels(str) {
  var num =  str.match(/[aeiou]/gi).length;
    console.log(num);
}
countVowels("Hello");
