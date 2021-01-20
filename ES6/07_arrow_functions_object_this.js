// Arrow functions or Fat Arrow Functions
// reg function : 'this' refers parent, left of the dot
// arrow function: referes to it's current surrounding scope

const bob = {
  firstName: 'bobo',
  lastName: 'smith',
  sayName: function () {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

const anna = {
  firstName: 'anna',
  lastName: 'sanders',
  sayName: () => {
    console.log(this);
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

// invoke
bob.sayName();
// anna.sayName();
