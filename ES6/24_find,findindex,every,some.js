const person = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'jane' },
  { id: 1, name: 'anna' },
];

// Find hanya akan menghasilkan 1 value yang match (sesuai)
// jika tidak error
let anna = person.find((item) => item.name === 'anna');
console.log(anna.name); //anna
anna = person.findIndex((item) => item.id === 2);
// console.log(anna);

const john = person.filter((item) => item.id === 1 || item.id === 2);
console.log(john);

const grades = ['A', 'B', 'C', 'D'];

let allGrades = grades.every((grade) => grade !== 'E');
console.log(allGrades); // true jika tidak ada dalam grades tidak sama will true
allGrades = grades.some((grade) => grade === 'E');
console.log(allGrades); // true krna dlam grad ada nilai C
// tapi jika misal value E maka false karena tidak ada dalam grade nilai E
