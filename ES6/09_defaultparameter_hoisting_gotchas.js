// default paramaters, arrow function gothcas

const john = 'john';
sayHi(); // not error cz john already declare
const peter = 'peter';

function sayHi(person = john) {
  console.log(`Hi ${person}`);
}

sayHello(); //error cz sayHello not declare
const sayHello = (person = 'bobo') => console.log(`Hello ${person}`);
