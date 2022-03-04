/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

/*
1. Define a function with 2 parameters
2. Use a for loop to check each items in the array in incrementing order
3. Use a if statement to check if each of the array item matches the value
4. If it does, return boolean true
5. If it doesn't, return boolean false
*/
