/* exported filterOutNulls */
function filterOutNulls(values) {
  var filterArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filterArr.push(values[i]);
    }
  } return filterArr;
}
