/* exported ransomCase */
function ransomCase(string) {
  var everyOther = string.toUpperCase().split('');
  for (var i = 0; i < everyOther.length; i += 2) {
    everyOther[i] = everyOther[i].toLowerCase();
  }
  return everyOther.join('');
}

/*
1. Define a function with one parameter
2. Define a variable and assign the parameter object to be uppercased and split into individual characters
to the rest of the characters that are lowercased
3. Use a for loop to check every other character
4. Make every other character lowercased
5. Use the join method to attach all characters and return the value of variable
*/
