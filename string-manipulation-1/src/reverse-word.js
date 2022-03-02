/* exported reverseWord */
function reverseWord(word) {
  var reversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
  } return reversed;
}

/*
1. Define a function with one parameter
2. Define a variable with an empty string
3. Use for loop to start looping from the last character of the word object
4. Decrement down to input characters of the word into the variable
5. Return the value of variable
*/
