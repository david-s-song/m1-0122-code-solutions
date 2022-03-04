/* exported invert */
function invert(source) {
  var newProp = {};
  for (var properties in source) {
    newProp[source[properties]] = properties;
  }
  return newProp;
}

/*
1. Define a function with one parameter
2. Define a variable and assign empty object literal to it
3. Use for in loop to check each properties of the parameter source object
4. Assign looped values of properties to newProp variable's keys
5. Return value of newProp variable
*/
