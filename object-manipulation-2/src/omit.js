/* exported omit */
function omit(source, keys) {
  var newObj = {};
  for (var prop in source) {
    if (keys.includes(prop) === false) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}

/*
1. Define a function with 2 parameters
2. Define a variable newObj and assign empty object literal to it
3. Use a for in loop in order to check each properties of source object
4. Use if statement to check if property values are included in parameter keys object
5. If it is not included, assign the source at prop to newOjb at prop
6. Return the value of newObj variable
*/
