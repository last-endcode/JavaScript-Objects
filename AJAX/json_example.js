const btn = document.querySelector('.btn');
const url = `./api/person.json`;

btn.addEventListener('click', () => {
  getData(url);
});

function getData(url) {
  // construct xhr
  const xhr = new XMLHttpRequest();
  // method open get/post/put, url
  xhr.open('GET', url);
  // untuk perubahan readyState
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // disini dia akan convert ke obj gunakan parse
      const data = JSON.parse(xhr.responseText);
      // get obj use map
      const displayData = data
        .map((item) => {
          return `<p>${item.name} As ${item.job}</p>`;
        })
        .join(' ');
      // buat element <div></div>
      const element = document.createElement('div');
      // isi element div dgn displayData
      element.innerHTML = displayData;
      // add to browser
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        response: xhr.responseText,
        readyState: xhr.readyState,
      });
    }
  };
  xhr.send(); // for request to server
}
