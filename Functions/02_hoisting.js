// Hoisting
// function and var declaration are hoisted
// safer to acces only after initialized

// this invoke mau disimpan dimana pun tetap terpanggil
// karena js membaca stiap baris code

person();
// console.log(person);

// var dia akan undefined
// tapi tdk menghsilkan error
// but kalo disimpan stlah functionnya dia
// akan menghasilkan random
personVar();

// jika simpan diatas sebelum function akan error
// karena function dgn inisialiasi hnya bisa membaca
// ketika hanya sesudah di inisialiasi
// artinya lebih aman digunakan hanya sesudah di inisialiasi
theName(); // error

let firstName = 'zoro';
const friendName = 'lutfy';
var random = 'random';

// theName();  //bisa krna sesudah inisialisasi

function person() {
  console.log(`Hello World`);
}

function personVar() {
  console.log(`${random}`);
}

function theName() {
  console.log(`${firstName} & ${friendName}`);
}

// theName();  //bisa krna sesudah inisialisasi
