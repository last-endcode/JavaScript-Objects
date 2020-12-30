const newnames = 'apple.inc';
const age = 20;
let random = 'random-value';

const person = {
  name: 'john doe',
  age: age,
  company: {
    name: newnames,
    job: 'front end developer',
  },
  married: true,
  expert: {
    skills: ['html', 'css3', 'js'],
    hobby: {
      books: ['onepiece', 'shokugeki no souma'],
    },
  },
  'random-value': 'jobss!',
};

// acces all obj
// console.log(person);

// *** acces on nested
// front end developer
console.log(person.company.job);
// [ 'html', 'css3', 'js' ]
console.log(person.expert.skills);
// shokugeki no souma
console.log(person.expert.hobby.books[1]);
console.log('random-value');
// apple.inc
console.log(person.company.name);
console.log(person['random-value']);
// { name: 'apple.inc', job: 'front end developer' }
// still same with person.company
console.log(person['company']);

console.log(person.age);
