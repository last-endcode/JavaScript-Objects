function getElement(selectElement) {
  const element = document.querySelector(selectElement);
  // if true back to element value
  if (element) {
    return element;
  }
  // if falses notice
  throw new Error(
    `please check your element on html ${selectElement} cause not found`
  );
}

function Gallery(element) {
  // for all picture tdk menggunakan ini
  //karena nodelist dan solusi ada spread operator
  // this.list = element.querySelectorAll('.img');
  this.list = [...element.querySelectorAll('.img')];
  // console.log(this.list);
  // ** Target
  this.container = element;
  this.modal = getElement('.modal'); //tampilan awal fixed
  this.mainImg = getElement('.main-img'); //content tuk gambar
  this.imgName = getElement('.image-name'); //tuk text dibawah content
  this.modalImages = getElement('.modal-images'); //gambar dibawah
  // ** close
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');
  this.closeBtn = getElement('.close-btn');

  // Bind function
  // ref u can use this one
  let self = this; //dia merujuk pada Gallery
  // ** Click
  this.container.addEventListener(
    'click',
    function (e) {
      // ** IF target same with img
      // tampilkan e.target , dan list (img)
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
      // self.openModal();
    }.bind(this)
  );
}

// protype function for openModal()
// param for selectedImage, and list (img)
Gallery.prototype.openModal = function (selectedImage, list) {
  // *** invoke this.setMainImage
  this.setMainImage(selectedImage);
  // *** map modalImages
  // show display modal-image
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
    })
    .join('');

  // *** invoke this.modal
  this.modal.classList.add('open');
};

// for main-image, and image-name
Gallery.prototype.setMainImage = function (selectedImage) {
  // set picture & title
  this.mainImg.src = selectedImage.src;
  this.imgName.textContent = selectedImage.title;
};

// create new instance object
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
