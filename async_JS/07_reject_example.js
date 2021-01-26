// reject example
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');

btn.addEventListener('click', () => {
  const url = `https://source.unsplash.com/random?sig=${Math.random()}`;
  // invoke promise function
  loadImage(url)
    .then((response) => container.appendChild(response))
    .catch((err) => console.log(err));
});

// function for promise
function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`Your URL is failed ${url}`));
    });
    img.src = url;
  });
}
