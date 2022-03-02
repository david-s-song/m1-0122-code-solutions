/* exported getValues */
function getValues(object) {
  var objArr = [];
  for (var prop in object) {
    objArr.push(object[prop]);
  } return objArr;
}

/*
1. Define a function with one parameter
2. Define a variable and assign to it an empty array
3. Use for in loop to check each property in the object
4. Push the attached properties to object into the variable objArr
5. return the variable
*/
