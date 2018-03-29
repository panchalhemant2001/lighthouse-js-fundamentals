//function to concatenate two arrays
function concat(arr1, arr2) {
  for (var i = 0; i < arr2.length; i++){
    arr1.push(arr2[i]);
  }
  return arr1;
}


//function to sort array
function sortArray(arr) {
/*
  if (arr !== undefined) {
    console.log("array is defined");
  } else {
    console.log("array is undefined");
  }
*/
  for(var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}


function merge(arr1, arr2) {
  var arr = concat(arr1, arr2);
  arr = sortArray(arr);
  return arr;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
