/*
defaults to global - window
arrow functions - pump the breaks
*/

// console.log(this);

function showThis() {
  console.log(this);
}

const john = {
  name: 'john',
  usetFunctionThis: showThis,
};

const boby = {
  name: 'boby',
  usetFunctionThis: showThis,
};

// print with the obj
john.usetFunctionThis(); // {name: "john", usetFunctionThis: ƒ}
boby.usetFunctionThis(); //{name: "boby", usetFunctionThis: ƒ}

// Tapi jika tanpa object dot notation
// atau hanya function normal
// otomatis dia akan menghasilkan default window global
showThis(); // Window

// contoh
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

// addEvent
// btn1.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);

// ketika diklik btn1/btn2 dia akan menghasilkan
// element <button class="btn-1">button 1</button>
// karena langsung merujuk pada showThis

// tapi jika
btn1.addEventListener('click', function () {
  showThis(); // window menjadi normal
});
