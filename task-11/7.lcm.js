function lcd(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
    else
  return ( (Math.abs(x * y)) / gcd(x, y));
}
function gcd(a,b){
  if ( ! b) {
      return a;
  }
  return gcd(b, a % b);
}
console.log(lcd(10,15));
