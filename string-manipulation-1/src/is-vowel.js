/* exported isVowel */
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(char.toLowerCase()) !== -1) {
    return true;
  } else {
    return false;
  }
}

/*
1. Define a function with one parameter
2. Define a variable and assign an array containing all vowels
3. Use an if statement to create a conditional expression
4. Use the lowercase method to make all parameter object into lowercase
5. use the indexOf method to find if there are any vowels in the paramater object with the variable
6. return the value of true, if there are
7. return the value of false, if there are none
*/
