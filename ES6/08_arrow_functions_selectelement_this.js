// Arrow functions or Fat arrow functions
// reg function : 'this' refers parent, left of the dot
// arrow function : referes to it's cureent surrounding scope

// first example use re function

const btn = document.querySelector('.btn');
// console.log(btn);

// Disini dia bisa merubah warna menggunakan reg function
// karena this parentnya merujuk pada btn dot
// btn.addEventListener('click', function () {
//   this.style.background = 'black';
// });

// sedangkan menggunakan arrow dia akan error
// karena sebuah this nya dia merujuk pada window obj()
// btn.addEventListener('click', () => {
//   // console.log(this); global window obj {}
//   this.style.background = 'black';
// });

// terkecuali kita membuat setTimeout 2seconds
// bisa menggunakan arrow karna dalam setTimeout
// arrow function merujuk pada sekitaran scope
// sedangkan jika mnggunakan function dia bukn mrujuk
// pada parrent tapi window global obj()
btn.addEventListener('click', function () {
  setTimeout(() => {
    this.style.background = 'navy';
  }, 2000);
});
