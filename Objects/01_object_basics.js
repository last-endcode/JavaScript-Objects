const person = {
  name: 'john doe',
  age: 25,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    return `hello, my name is ${name}`;
  },
  sayHello(name) {
    console.log(`hello, my name is ${name}`);
  },
};

// acces obj u can use dot notation
// console.log(person.name); //john doe
// change name john doe be peter walker
person.name = 'peter walker';
// console.log(person.name);

// print all object
// console.log(person);
// access object with function parameter
// console.log(person.greet('wiwa'));

//acces obj on array
console.log(person.siblings[person.siblings.length - 1]);

// delete property
let siblings = delete person.siblings;
console.log(siblings); //true its succesfully for delete
console.log(person);
