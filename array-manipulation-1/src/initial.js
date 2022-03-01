/* exported initial */
function initial(array) {
  var initialArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialArr.push(array[i]);
  } return initialArr;
}

/*
1. Define the function with one parameter
2. Define a variable and assign it to an empty array
3. Use a for loop to check each properties of the array excluding the last
4. Push the values of parameter object into the empty array
5. Return the value of variable
*/
