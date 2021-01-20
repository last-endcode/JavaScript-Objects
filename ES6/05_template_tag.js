const content = document.getElementById('content');

const person = {
  name: 'john doe',
  job: 'developer',
};

const quote = modifedStyle`Hello my name is ${person.name.toUpperCase()} and my job as ${person.job.toUpperCase()} `;
content.innerHTML = quote;

// function modifedStyle
function modifedStyle(text, ...vars) {
  // console.log(text, vars);
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ''}</strong>`;
  });

  return awesomeText.join('');
}
