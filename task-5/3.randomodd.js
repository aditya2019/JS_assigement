function generate_random_odd(min,max){
 var num = Math.floor(Math.random() * (max - min)) + min;
 if((num % 2) == 0){
  return num + 1;
 }
 else {
  return num;
 }
}
console.log(generate_random_odd(40,100));

