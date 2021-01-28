const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const URL = 'https://api.chucknorris.io/jokes/random';
const img = document.querySelector('.container img');

btn.addEventListener('click', async () => {
  // asyncawait
  try {
    const data = await fetch(URL);
    const response = await data.json();
    showJoke(response);
  } catch (error) {
    console.log(error);
  }
});

// function tuk filter only joke
// sehingga tidak perlu membutuhkan JSON.parse
// karena sudah ada data.json dan
// fungsi ini tinggal membuat obj destructingnya
function showJoke({ value: joke }) {
  img.classList.add('shake-img');
  // const { value: joke } = data;
  content.innerHTML = joke;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, random);
}
