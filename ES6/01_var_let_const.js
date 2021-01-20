// var, let , const
// update, redifine

// menggunakan var tidak masuk akal
// karena dia bisa redifine ulang
var name = 'dncode';
console.log(name); //dncode
name = 'john doe';
console.log(name); //john doe
var name = 'orange';
console.log(name); // orange

// **** let
console.log('**************LET****************');
let names = 'jane';
console.log(names);
names = 'susy';
console.log(names); // susy
// let names = 'orange'; // will error but this make sense!

console.log('**************CONST****************');
const person = 'codeone';
console.log(person); //codeone
// person = 'codetwo'; //will error but this make sense!
const firstName = {
  name: 'john doe',
};

console.log(firstName.name);
// redefine again for object its CAN
firstName.name = 'Edward NewGate';
console.log(firstName.name); // Edward NewGate
// add obj
firstName.address = 'Blue Sea';
console.log(firstName);
