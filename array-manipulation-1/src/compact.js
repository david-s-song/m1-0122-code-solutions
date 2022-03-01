/* exported compact */
function compact(array) {
  var compactArr = [];
  for (var i = 0; i < array.length; i++) {
    if ([false, null, NaN, 0, -0, undefined, ''].includes(array[i]) === false) {
      compactArr.push(array[i]);
    }
  } return compactArr;
}

/*
1. Define a function with one parameter
2. Define a variable and assign an empty array
3. Use a for loop to check each property in the parameter object
4. Use a if statement to see if omitted items are included in the parameter object
5. If it is not included, push the items into the indexes of the array
6. When the loop is completed, return the values of array
*/
