/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
isUnderFive(10);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(5);

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
startsWithJ('JavaScript');

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
isOldEnoughToDrink(bart);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
isOldEnoughToDrive(homer);

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
categorizeAcidity(-1);

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
introduceWarnerBro('cody');
