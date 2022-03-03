/* exported getKeys */
function getKeys(object) {
  var keysArr = [];
  for (var prop in object) {
    keysArr.push(prop);
  } return keysArr;
}
