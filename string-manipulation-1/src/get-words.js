/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}

/*
1. Define a function with one parameter
2. Use a if statement with the expression that if the parameter object is the same as an empty string
3. return an empty array
4. Use an else statement with the split method with a space in order to return the new value of array
*/
