// buat obj
const people = [
  { name: 'john', job: 'developer' },
  { name: 'boby', job: 'designer' },
  { name: 'jane', job: 'the boss' },
];

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

// addEvent if clicked
btn.addEventListener('click', () => {
  showPeople();
});

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      // console.log(person); ktika diklik mnghasilkan smua obj dalam people
      // use destruct
      const { name, job } = person;
      return `<p>${name.toUpperCase()} <strong>${job.toUpperCase()}</strong></p>`;
    })
    .join(' ');
  // console.log(newPeople); just for check
  container.innerHTML = newPeople;
  // otmatis ketika diklik menghasilkan sesuai obj people
  // JOHN DEVELOPER
  // BOBY DESIGNER
  // JANE THE BOSS
};
