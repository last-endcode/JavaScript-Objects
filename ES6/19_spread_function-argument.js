const numbers = [90, 34, 78, 54, 556];

// will error because you should spread operator
// console.log(Math.max(numbers)); // NaN
// console.log(Math.max(...numbers)); //556

// example again use function
// actually concept still same

const fullName = ['mugiwara no', 'lutfy'];
const person = (firstName, lastName) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

// person(fullName[0], fullName[1]);
person(...fullName); //effective use spread
