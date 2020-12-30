// all objects in JS have access to constructor
// property that returuns a constructor function that created it
// built in constructor function
// arrays and functions are object in JS

function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `my full name is ${this.firstName} ${this.lastName}, i love JS`
    );
  };
}

// here example constructor function
// *** obj, array, function

const john = new person('john', 'doe');
// console.log(john.constructor);

const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const peter = function () {};
console.log(peter);

// example here can new instance will same constructor
const jane = new john.constructor('jane', 'edward');
jane.fullName();
