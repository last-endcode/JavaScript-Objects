// new string methods
// startsWith(), endsWith(), includes(), repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';

// remember this case sensitive

// startsWith()
console.log(person.startsWith('Pe')); //true
console.log(person.startsWith('pe')); //false
// 6 and hitung dimulai dari 23456- sebelum EMP total 6
console.log(employee.startsWith('EMP', 6)); //true

//endsWith()
console.log(manager.endsWith('DOE')); //true
console.log(manager.endsWith('doe')); //false
// hitung dari awal sampai sesudah john
console.log(manager.endsWith('JOHN', 14)); //true

// repeat()
const theRepeat = (person, amount = 3) => person.repeat(amount);

const multiple = theRepeat(person, 20);
console.log(multiple);
