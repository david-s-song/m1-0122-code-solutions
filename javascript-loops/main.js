/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  } return numbers;
}
getNumbersToTen();

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  } return evenNumbers;
}
getEvenNumbersToTwenty();

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  } return repeated;
}
repeatWord('kobe', 10);

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
logEachCharacter('Kobe');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  } return doubled;
}
doubleAll([2, 4, 7, 10]);

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  } return keys;
}
getKeys({ David: 'shooting-guard', Sebastian: 'center', Manny: 'point-guard' });

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
getValues({ David: 'shooting-guard', Sebastian: 'center', Manny: 'point-guard' });
