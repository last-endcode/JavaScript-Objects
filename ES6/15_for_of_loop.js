// for of - loops through the values of an iterable objc
// string, arrayy, map, set , etc - not object
// unlike foreach - we can use break , continue

const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'john smith pepper III';
let shortName = '';

for (const letterName of longName) {
  if (letterName === ' ') {
    continue;
  } else {
    shortName += letterName;
  }
}
// console.log(shortName); //johnsmithpepperIII

for (const fruit of fruits) {
  if (fruit === 'banana') {
    // continue;
    break;
  }
  console.log(fruit); // apple, orange, peach
  // jika continue banana dilewat
  // jika break stop sampai orange
}
