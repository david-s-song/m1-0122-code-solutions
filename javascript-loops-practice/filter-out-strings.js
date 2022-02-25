/* exported filterOutStrings */
function filterOutStrings(values) {
  var filteredArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== (typeof '')) {
      filteredArr.push(values[i]);
    }
  } return filteredArr;
}
