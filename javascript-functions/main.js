function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
console.log('greet:', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('getArea:', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log('firstName:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastItem = array.length - 1;
  var lastElement = array[lastItem];
  return lastElement;
}
console.log('lastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));
