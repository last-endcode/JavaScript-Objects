// AJAX

// construct xhr
const xhr = new XMLHttpRequest();
// console.log(xhr); //readyState:0 , status:0

// method : get/post/put, url
xhr.open('GET', './api/simple.txt');
// callback jika setiap readyState changes
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const text = document.createElement('p');
    text.textContent = xhr.responseText;
    // add to browser
    document.body.appendChild(text);
  } else {
    // if not
    console.log({
      status: xhr.status,
      readyState: xhr.readyState,
    });
  }
};
xhr.send(); // for request to server

/* output:
{status: 200, readyState: 2}
{status: 200, readyState: 3}
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis cum, doloremque id suscipit vel voluptates tempora laudantium totam! Eveniet?

Jika error status : 404

*/


