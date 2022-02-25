/* exported countdown */
function countdown(number) {
  var countNumbers = [];
  while (number >= 0) {
    countNumbers.push(number);
    number--;
  } return countNumbers;
}
