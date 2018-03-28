function range(start, end, step) {
  var result = [];    //creating empty array
  if (start == undefined || end == undefined || step == undefined || start > end || step < 0) {
    result = [];
  } else {
    for (var i = start; i <= end; i = i + step) {
      result.push(i);
    }
  }
  return result;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
var x;  //variable x is undefined
console.log(range(x,5,1));