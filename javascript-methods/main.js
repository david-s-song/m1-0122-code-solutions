var numberOne = 1;
var numberTwo = 2;
var numberThree = 3;
var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('value of maximum:', maximumValue);

var heroes = ['batman', 'spiderman', 'aquaman', 'superman'];
var randomNumber = Math.random(heroes) * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  { title: 'Mere Christianity', author: 'C.S. Lewis' },
  { title: "The Pilgrim's Progress", author: 'John Bunyan' },
  { title: 'Confessions', author: 'Augustine of Hippo' }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'David Song';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
