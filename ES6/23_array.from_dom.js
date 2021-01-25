// Array.from and Arra.of - Not on the prototype

// from - returns array obj from any obj with a length
// property or in a iterable obj
// from turns array-like/ish into array - string, nodelist,set

const p = document.querySelectorAll('p');
const result = document.querySelector('.result');
const second = document.querySelector('.second');

// here result is node list
console.log(p); // node list can't use map solution perfect use Array.from
const textOne = Array.from(p) // Arra.from(p) => will get array item and you can use map
  .map((item) => `<span>${item.textContent.toUpperCase()}</span>`)
  .join(' ');
result.innerHTML = textOne; // JAVASCRIPT HTML5 CSS3

// For Fast Way
const textTwo = Array.from(document.querySelectorAll('p'), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(' ');

second.innerHTML = textTwo; // JavaScript html5 css3
