// Array.from and Arra.of - Not on the prototype
// array.from
// array.of
// of creates a new array instances from a variable number of
// arguments

const example = ['one', 'two', 'three'];
console.log(example); //[ 'one', 'two', 'three' ]
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

const person = Array.of('shanks', 'mugiwara');
console.log(person); //[ 'shanks', 'mugiwara' ]
