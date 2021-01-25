// import file dari export ke sini
import { people, random } from './utils/data.js';
import showPeople from './utils/showPeople.js';

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

// addEvent if clicked
btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
