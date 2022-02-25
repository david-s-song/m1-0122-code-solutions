/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddsAndEvens = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = 'even';
    } else {
      numbers[i] = 'odd';
    } oddsAndEvens.push(numbers[i]);
  } return oddsAndEvens;
}
