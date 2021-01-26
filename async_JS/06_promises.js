// callbacks, promises, async/await
// promises - pending, resolved, rejected
// then catch - pass another callback
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {});

// promises pending
// disini dia akan menghasilkan pending
// const promise = new Promise((resolve, reject) => {});
// console.log(promise);

// promises
// resolve, reject is callback function
const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve(`This will true value`);
  } else {
    reject(`Error i'm sorry... cause not true`);
  }
});

// Tidak bisa mengakses sperti ini
// console.log(promise.value); //undefined
// solusi jika ingin tau sukses , or error for value
// gunakan then (sucess), dan catch tuk error value
// dan tuk callbackfunction massing2 tsb whatever
// karena dia akan merujuk pada value yg true/false
promise
  .then((justTrue) => {
    console.log(justTrue);
  })
  .catch((errrrr) => {
    console.log(errrrr); //Error i'm sorry... cause not true
  });
