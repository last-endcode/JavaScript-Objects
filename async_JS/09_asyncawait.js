// callbacks, promises, async/await
// must have async
// await waits till promises is settled
// error handling - try / catch

/*
just for reference:
#await is promise resolved
async function someFunction(){
  await
}

const otherFunctions = async() => {
  await
}

*/
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  // log data get hello
  // displayColors().then((data) => console.log(data));

  // and here no need then and change use await
  const result = await displayColors();
});

async function displayColors() {
  // here await make sure promise is settled
  try {
    await changeColors(1000, heading1, 'red');
    await changeColors(1000, heading2, 'green');
    await changeColors(1000, heading3, 'blue');
  } catch (error) {
    console.log(error);
  }
  // return `hello`;
}

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
