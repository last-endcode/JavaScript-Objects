// Destructuring swap variables
// faster/easier way to access/ unpack from arrays
// objects into variables
// arrays

let first = 'bob';
let second = 'john';

// let temp = second;
// second = first; //bob
// first = temp; // john

// artinya adalah
// second untuk first / john
// first untuk second / bob
[second, first] = [first, second];

console.log(first, second); // john bob
