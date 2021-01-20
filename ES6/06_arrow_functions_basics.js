// arrow functions or fat arrow functions
// no name, always expressions, assign to varibles
// not function keyword
// 'this'

// function sayHi() {
//   console.log(`Hello World`);
// }
// sayHi();

// const hello = function (name) {
//   console.log(`Hello ${name}`);
// };
// hello('john');

// function triple(value1, value2) {
//   return value1 * value2 * 3;
// }

const helloMan = () => console.log(`Hello World !`);
helloMan();

// one parameter
const double = (value) => value * 20;
const result = double(20);
console.log(result);

// two parameter
// remember use { return }
const multiple = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

const sum = multiple(100, 10);
console.log(sum);

// return obj
// disini menggunakan ({obj})
// agar js tidak bingung shingga dibutuhkan ()
const obj = () => ({ name: 'john', age: 25 });
const person = obj();
console.log(person);

// example again use filter
const numbers = [20, 30, 40, 50];

const highNumber = numbers.filter((number, index) => {
  console.log(index); //print index 0,1,2,3
  return number < 20; // false [] cz small then 20 not there is no
});
console.log(highNumber);

// addEventListener
const btn = document.querySelector('.btn');

btn.addEventListener(
  'click',
  () => (
    (btn.style.background = 'black'), (btn.style.textTransform = 'uppercase')
  )
);
