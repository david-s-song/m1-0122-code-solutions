/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var vowels = 'AEIOU';
  var upperCased = string.toUpperCase();
  for (var i = 0; i < upperCased.length; i++) {
    if (vowels.indexOf(upperCased[i]) !== -1) {
      count = count + 1;
    }
  }
  return count;
}
