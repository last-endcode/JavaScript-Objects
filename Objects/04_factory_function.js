// blue print
// factory function and constructor functions
// factory functions for return obj & based on parameter
//

//  *** remember heres not dynamic
// here if add text i love js for john
// its good but how for bobby, or 3000 obj with name?
// for solution you need factory functions

// const john = {
//   firstName: 'john',
//   lastName: 'doe',
//   fullName: function () {
//     console.log(`my full name is ${this.firstName} ${this.lastName}
//     i love js`);
//   },
// };

// const bob = {
//   firstName: 'bob',
//   lastName: 'walker',
//   fullName: function () {
//     console.log(`my full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// ***** Factory Function
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`My name is ${this.firstName} ${this.lastName} i love JS`);
    },
  };
}

const john = createPerson('john', 'doe');
john.fullName();
const bob = createPerson('bob', 'walker');
bob.fullName();
const susy = createPerson('susy', 'kane');
susy.fullName();
const kelly = createPerson('kelly', 'jane');
kelly.fullName();
