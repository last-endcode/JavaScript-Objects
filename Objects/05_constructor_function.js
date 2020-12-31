// constructor function
// new - creates new object, points to it, omit return
function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`my full name is ${this.firstName} ${this.lastName}`);
  };
  console.log(this);
}

// access obj use new

const john = new person('john', 'doe');
john.fullName();
const boby = new person('boby', 'walker');
boby.fullName();
const susy = new person('susy', 'dane');
susy.fullName();
