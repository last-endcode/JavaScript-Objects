// promises example

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  // invoke
  // disini then dia berfungsi karena promise resolve()
  // jadi jika resolve di tidak adakan
  // yang tercetak hanyalah heading1 saja
  // dan yg then tidak ingat slalu then is true dan butuh resolve

  changeColors(1000, heading1, 'red')
    .then(() => changeColors(1000, heading2, 'blue'))
    .then(() => changeColors(1000, heading3, 'green'))
    .catch((err) => console.log(err));
});

// membuat promises function
// callbackfunction is time, element, colors
function changeColors(time, element, colors) {
  return new Promise((resolve, reject) => {
    // if exist
    if (element) {
      setTimeout(() => {
        element.style.color = colors;
        resolve();
      }, time);
    } else {
      reject(new Error(`Your element is failed cause ${element}`));
    }
  });
}
