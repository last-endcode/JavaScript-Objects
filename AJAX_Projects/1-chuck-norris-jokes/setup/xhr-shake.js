const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const URL = 'https://api.chucknorris.io/jokes/random';
// feature for chuck will shake
const img = document.querySelector('.container img');

btn.addEventListener('click', () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send(); // for request to server
  // callbacks
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      // **** 1 add img here *****
      img.classList.add('shake-img');
      // console.log(xhr.responseText); // string solusi parse
      // karena sudah tau isi obj nya bisa menggunakan
      // obj destruct const { obj}
      const { value: joke } = JSON.parse(xhr.responseText);
      // add to browser
      content.innerHTML = joke;
      // **** 2 setTimeout img  *****
      const random = Math.random() * 1000;
      console.log(random);
      setTimeout(() => {
        img.classList.remove('shake-img');
      }, random);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
