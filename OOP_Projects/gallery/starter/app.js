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
  // pointing to Gallery
  this.closeModal = this.closeModal.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.chooseImage = this.chooseImage.bind(this);

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
  // menampilkan gambar yg diklik dibawah agar muncul sesuai ururat
  // jadi gambar yg diklik ada ikut juga dibawah
  this.modalImages.innerHTML = list
    .map(function (image) {
      // console.log(image);
      return `<img src="${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}" />`;
    })
    .join('');
  // console.log(list); array img
  // *** invoke this.modal
  this.modal.classList.add('open');
  this.closeBtn.addEventListener('click', this.closeModal);
  this.prevBtn.addEventListener('click', this.prevImage);
  this.nextBtn.addEventListener('click', this.nextImage);
  this.modalImages.addEventListener('click', this.chooseImage);
};

// for main-image, and image-name
Gallery.prototype.setMainImage = function (selectedImage) {
  // set picture & title
  this.mainImg.src = selectedImage.src;
  this.imgName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function () {
  // close modal
  this.modal.classList.remove('open');
  this.closeBtn.removeEventListener('click', this.closeModal);
  this.prevBtn.removeEventListener('click', this.prevImage);
  this.nextBtn.removeEventListener('click', this.nextImage);
};

// for nextImage mainImg yang dipilih
Gallery.prototype.nextImage = function () {
  const selected = this.modalImages.querySelector('.selected');
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove('selected');
  next.classList.add('selected');
  this.setMainImage(next);
};

Gallery.prototype.prevImage = function () {
  const selected = this.modalImages.querySelector('.selected');
  const prev = selected.previousSibling || this.modalImages.lastChild;
  selected.classList.remove('selected');
  prev.classList.add('selected');
  this.setMainImage(prev);
};

// for Choose Image
Gallery.prototype.chooseImage = function (e) {
  const selected = this.modalImages.querySelector('.selected');
  // jika target sama dgn modal-img
  //
  if (e.target.classList.contains('modal-img')) {
    // console.log(e.target); check gambar dibawah maka hasilnya adalah sesuai dgn gambar diklik
    selected.classList.remove('selected');
    this.setMainImage(e.target);
    e.target.classList.add('selected');
  }
};
// create new instance object
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
