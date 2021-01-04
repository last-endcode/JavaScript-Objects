/* All Objects in JS have access to constructor
property that returns a constructor function that created it
// built in constructor functions
// arrays and functions are objects in javascript
*/

// create constructor function
function MemberSHP(firstName, lastName) {
  // * use this for new instance & assign use param
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  };
  // console.log(this);
}

// create blue print use NEW keyword
const lutfy = new MemberSHP('mugiwara no', 'lutfy');

// check constructor property
console.log(lutfy.constructor);
const thisArray = [];
console.log(thisArray.constructor);
const thisObj = {};
console.log(thisObj.constructor);
const thisFunc = function () {};
console.log(thisFunc.constructor);

/* output: 
ƒ MemberSHP(firstName, lastName) {
  // * use this for new instance & assign use param
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`Hello $…

ƒ Array() { [native code] }
ƒ Object() { [native code] }
ƒ Function() { [native code] }

*/

// dan sekarang kita bisa menggunakan constructor
// dgn nilai yang sudah ada
const zoro = new lutfy.constructor('rorona', 'zoro');
zoro.fullName(); //Hello rorona zoro
