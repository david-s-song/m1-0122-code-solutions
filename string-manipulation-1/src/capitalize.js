/* exported capitalize */
function capitalize(word) {
  var lowerCase = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lowerCase.slice(1);
}
