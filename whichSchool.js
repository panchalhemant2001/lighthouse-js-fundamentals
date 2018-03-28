function whichSchool(age) {
  var result = "";

  if(age < 13) {
    result = "Elementary School";
  } else if (age >= 13 && age <= 18) {
    result = "Secondary School";
  } else {
    result = "Lighthouse Labs";
  }

  return result;
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));