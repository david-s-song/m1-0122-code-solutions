/* exported chunk */
function chunk(array, size) {
  var result = [];
  for (var i = 0; i < array.length; i + size) {
    var arrChunks = array.slice(i, i + size);
    result.push(arrChunks);
  }
  return result;
}

/*
1. Define a function with 2 parameters
2. Define a variable and assign an empty array to it
3. Use a for loop to check through the parameter array object by incrementing from the first item to the count of size
(i = i + size)
4. Then add the first item to the count of the given size into a new variable
5. Put the new variable arrChunks into the first variable result
6. Return the value in the first variable result
*/
