// call & apply

const john = {
  name: 'john',
  age: 25,
};

const susy = {
  name: 'susy',
  age: 27,
};

function greeting(city, country) {
  console.log(this);
  console.log(
    `Hello ${this.name} your age is ${this.age} and your live in ${city}, ${country}`
  );
}

// here different call & apply
// call for argument is ***list argument***
greeting.call(john, 'bandung', 'West in java');
greeting.call(susy, 'bandung', 'West in java');
greeting.call({ name: 'natsui', age: 42 }, 'tokyo', 'japan');
// *** output
// Hello john your age is 25 and your live in bandung, West in java
// Hello susy your age is 27 and your live in bandung, West in java

// apply for argument is ***ARRAY***
greeting.apply({ name: 'peter', age: 30 }, ['amsterdam', 'Netherlands']);
greeting.apply(susy, ['riyadh', 'saudi arabian']);
