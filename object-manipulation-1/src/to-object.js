/* exported toObject */
function toObject(keyValuePair) {
  var newValueObj = {};
  var property;
  var value;
  property = keyValuePair[0];
  value = keyValuePair[1];
  newValueObj[property] = value;
  return newValueObj;
}

/*
1. Define a function with one parameter
2. Define a variable and assign to it an empty object literal
3. Define an empty variable property to be assigned
4. Define an empty variable value to be assigned
5. Assign the first item of the parameter array to variable property
6. Assign the second item of the parameter array to variable value
7. Attach property to the variable with empty object literal and assign to it the value variable
8. Return the value of newValueObj variable
*/
