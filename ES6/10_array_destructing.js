// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];

// console.log(orange, banana, lemon);

// example array assign to friends
// susan disini menjadi undefined karena index friend hanya
// berisi 4 index 0-4 sehingga susan menjadi undefined
// const [john, peter, bob, anna, kelly, susan] = friends;
// console.log(john, peter, bob, anna, kelly, susan);

// dan untuk menskip misal peter anna di hilangkan
// dalam pendeklarasian const hilangkan dgn comma
const [john, , bob, , kelly] = friends;
console.log(john, bob, kelly); //john, bob, kelly

/* 
note const [john, bob, ...] nama bebas karna mau nama apapun
dia akan menghasilkan value yang berada dalam array friends

*/
