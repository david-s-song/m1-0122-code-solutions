/* exported tail */
function tail(array) {
  var tailArr = [];
  for (var i = 1; i < array.length; i++) {
    tailArr.push(array[i]);
  } return tailArr;
}

/*
1. Define the function with parameter object
2. Define a variable and assign it to an empty array
3. Use a for loop from the second item of the parameter object
4. Push items into the new variable from the second item
5. Return values of the variable
*/
