/* exported capitalizeWord */
function capitalizeWord(word) {
  var firstCapped = word[0].toUpperCase() + word.slice(1).toLowerCase();
  if (firstCapped === 'Javascript') {
    return 'JavaScript';
  } else {
    return firstCapped;
  }
}

/*
1. Define a function with one parameter
2. Define a variable and assign concatenated word with first character to be capitalized
to the rest of the characters that are lowercased
3. Use an if statement to check if the variable matches string "Javascript"
4. If it matches string "Javascript", return "JavaScript" (with captial "S")
5. If it doesnt, return the value of variable firstCapped
*/
