// Rest operator
// collcets the items
// note jangan menyimpan rest di depan
// selalu simpan rest operator di belakang selalu

// arrays
const shp = ['mugiwara', 'zoro', 'sanji'];
const [pirates, second, ...rest] = shp;
// mugiwara zoro [ 'sanji' ]
// console.log(pirates, second, rest);

// obj
const person = {
  name: 'shanks',
  member: 'RHP',
};

const { name: firstName, member, ...rest_ } = person;
// console.log(firstName, member, rest_); //shanks RHP {}

// function
const allbanking = [10, 10, 10];
function getPerson(fullName, ...banking) {
  console.log(fullName, banking);
  let total = 0;
  for (const value of banking) {
    total += value;
  }
  console.log(`Hello ${fullName} your banking is ${total}`);
}

getPerson(person.name, 10, 10, 10);
getPerson(person.name, ...allbanking);
