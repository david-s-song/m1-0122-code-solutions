/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var prop of keys) {
    var secObj = source[prop];
    if (secObj !== undefined) {
      newObj[prop] = secObj;
    }
  }
  return newObj;
}

/*
1. Define a function with 2 parameters
2. Define a variable newObj and assign empty object literal to it
3. Use a for of loop in order to check each value attached to keys
4. Define a variable secObj and assign parameter source at prop values
5. Use if statement to check if variable doesn't match undefined, assign variable secObj to newObj at prop value
*/
