function howManyHundreds(num){
  var result = (num - (num % 100)) / 100;
  return result;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));