// call method,
// you can write a method that can be used on different objects.

const john = {
  name: 'john',
  age: 25,
  greeting: function () {
    console.log(this);
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  },
};

const susy = {
  name: 'susy',
  age: 30,
};

// u can use two option: like function this
// or use object
function greeting() {
  console.log(this);
  console.log(`Your name is ${this.name} and age is ${this.age}`);
}

greeting.call(susy);
// Your name is susy and age is 30

// or you can use this one
john.greeting.call(susy);
// My name is susy and my age is 30

// and for create again use argument
john.greeting.call({ name: 'peter walker', age: 68 });
