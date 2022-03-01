/* exported reverse */
function reverse(array) {
  var reversedArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  } return reversedArr;
}

/*
1. Define the function with parameter object
2. Define a variable and assign it to an empty array
3. Use a for loop from the last item of the parameter object
4. Decrement from the last positioned index of the parameter object
5. Push items into the new variable from the decrementing order
6. Return the value of the array
*/
