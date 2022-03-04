/* exported defaults */
function defaults(target, source) {
  for (var prop in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (source.hasOwnProperty(prop) !== target.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }
}

/*
1. Define a function with two parameters
2. Use for in loop to check through each of the properties in the parameter source object
3. Use if statement and hasownproperty method to check if the source object contains all the properties
matching with target object properties
4. Assign values of source object at properties to target object at properties
*/
