// create object
const wiwa = {
  firstName: 'wiwa',
  lastName: 'dncode',
  married: false,
  skills: ['html', 'css', 'javascript', 'linux'],
  sayHi: function () {
    console.log(`hello....`);
  },
};

// *** For print use object dot notation
console.log(wiwa.firstName); // wiwa
console.log(`Hello ${wiwa.firstName} ${wiwa.lastName}`); //Hello wiwa dncode
// *** Re-assign object
wiwa.firstName = 'john';
console.log(`Hello ${wiwa.firstName}`); //Hello john
// *** print object with array
console.log(wiwa.skills[0]); //html
console.log(wiwa.skills); // [ 'html', 'css', 'javascript', 'linux' ]
console.log(wiwa.skills.length); // 4 for knowing all sum on array
console.log(wiwa.skills.length - 1); // 3 for knowing the last array
