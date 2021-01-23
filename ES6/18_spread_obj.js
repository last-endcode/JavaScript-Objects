const title = document.querySelectorAll('h1');
const result = document.querySelector('.result');

// solusi harus dibuatkan array krna masih node-list
// kemudian baru bisa menggunakan map,
// gunakan template string dan jgnlupkan .join
const titles = [...title]
  .map((item) => `<span>${item.textContent}</span>`)
  .join('');
// console.log(titles); // array [h1,h1,h1]

result.innerHTML = titles;
// JavaScripthtml5css3
