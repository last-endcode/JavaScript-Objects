// import file dari export ke sini
import { people, random } from './utils/data.js';
import showPeople from './utils/showPeople.js';
import get from './utils/getElement.js';

const container = get('.container');
const btn = get('.btn');

// addEvent if clicked
btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
