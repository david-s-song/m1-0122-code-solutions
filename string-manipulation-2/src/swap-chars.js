/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var firstCharacters = string.substring(0, firstIndex);
  var secondChar = string[secondIndex];
  var firstCharBetween = string.substring(firstIndex + 1, secondIndex);
  var firstChar = string[firstIndex];
  var lastCharacters = string.substring(secondIndex + 1);
  return firstCharacters + secondChar + firstCharBetween + firstChar + lastCharacters;
}

/*
1. Define a function with 3 parameters
2. Define a variable and assign first characters to the characters in firstIndex index position
3. Define a variable and assign the character at secondIndex position
4. Define a variable and assign characters between firstIndex and secondindex, starting from the + 1 position of firstIndex
5. Define a variable and assign the character at firstIndex position
6. Define a variable and assign last characters from secondIndex position + 1 position
7. Return the variables concatenated in order of variables defined
*/
