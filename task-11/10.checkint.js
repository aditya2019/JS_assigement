function isInt(value){
  return (typeof value === 'number') && (value % 1 === 0);
}

console.log(isInt(7.8));
