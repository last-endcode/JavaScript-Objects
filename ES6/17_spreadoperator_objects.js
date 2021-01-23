// spread operator....
// Allows an iterable to spread/expand indvidually inside reciever
// split into single items and copy them.
// ES2018/ ES8

const person = { name: 'mugiwara', job: 'pirates' };
let copyPerson = { ...person };
console.log(copyPerson);
// dan tuk menambah obj bisa langsung
copyPerson = { ...person, age: '25', name: 'rorona zoro' };
console.log(copyPerson); // {name:'rorona zoro',job:'pirates',age:25}
console.log(person); //still orignal {name:'mugiwara',job:'pirates'}
