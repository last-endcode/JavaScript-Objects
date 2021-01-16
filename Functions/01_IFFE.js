// Global variable
const a = 20;
const b = 20;

// normally function
function add() {
  console.log(`The result is : ${a + b}`); //40
}
add();

// Disini variable dia terproteksi
// like local
(function () {
  const a = 40;
  const b = 40;
  console.log(`The result is : ${a + b}`); //80
})();

// use parameter
(function (num1, num2) {
  console.log(`The result is : ${num1 * num2}`); //80
})(500, 5000000); // 2500000000

// expression function
const result = (function (num1, num2) {
  console.log(`The result is : ${num1 * num2}`); //80
  return num1 * num2;
})(500, 5000000);

console.log(result); //2500000000 cause your saving return if not will undefined
