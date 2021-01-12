function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `please check again element html : ${selection} because not found!`
  );
}

class Gallery {
  constructor(element) {
    this.list = [...element.querySelectorAll('.img')];
    // target
    this.container = element;
    this.modal = getElement('.modal');
    this.mainImage = getElement('.main-img');
    this.imgName = getElement('.image-name');
    this.modalImages = getElement('.modal-images');
    this.closeBtn = getElement('.close-btn');
    this.prevBtn = getElement('.prev-btn');
    this.nextBtn = getElement('.next-btn');

    // bind to function
    this.closeImage = this.closeImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);

    this.container.addEventListener(
      'click',
      function (e) {
        //target
        // jika target sama dgn class img
        // tampilkan gambar sesuai target yg dipilih
        // dan juga tampilkan gambar sesuai array
        if (e.target.classList.contains('img')) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }
  // *** method

  // ** openModal
  openModal(selectedImage, list) {
    // Sesuaikan kemunculan "gambar yg dibawah" sesuai list array
    // yg diklik, misal kamu klik nature otomatis yg muncul smua
    // element gambar nature(3), atau city(5)
    // dan jika yg dipilih sama munculkan yg selected
    this.modalImages.innerHTML = list
      .map(function (image) {
        // console.log(image);
        return `<img src="${image.src}" title="${image.title}
      data-id="${
        image.dataset.id
      }" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}" />`;
      })
      .join('');
    // panggil function setMainImg tuk menampilkan gambar
    this.setMainImg(selectedImage);
    // panggil modal dan tambah class open tuk membuka modal
    this.modal.classList.add('open');

    // fitur
    this.closeBtn.addEventListener('click', this.closeImage);
    this.prevBtn.addEventListener('click', this.prevImage);
    this.nextBtn.addEventListener('click', this.nextImage);
    this.modalImages.addEventListener('click', this.chooseImage);
  }

  // ** setMainImg tuk menampilkan gambar
  setMainImg(selectedImage) {
    // gambar utama setelah diklik adalah .main-img
    this.mainImage.src = selectedImage.src;
    this.imgName.textContent = selectedImage.title;
  }

  // closeImage
  closeImage() {
    this.modal.classList.remove('open');
    this.closeBtn.removeEventListener('click', this.closeImage);
    this.prevBtn.removeEventListener('click', this.prevImage);
    this.nextBtn.removeEventListener('click', this.nextImage);
    this.modalImages.removeEventListener('click', this.chooseImage);
  }
  nextImage() {
    // remember modalImages adalah gambar yang dibawah
    const selected = this.modalImages.querySelector('.selected');
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    // remove selected
    selected.classList.remove('selected');
    next.classList.add('selected');
    // update img
    this.setMainImg(next);
  }
  prevImage() {
    // remember modalImages adalah gambar yang dibawah
    const selected = this.modalImages.querySelector('.selected');
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    // remove selected
    selected.classList.remove('selected');
    prev.classList.add('selected');
    // update img
    this.setMainImg(prev);
  }

  chooseImage(e) {
    if (e.target.classList.contains('modal-img')) {
      const selected = this.modalImages.querySelector('.selected');
      selected.classList.remove('selected');
      // update
      this.setMainImg(e.target);
      e.target.classList.add('selected');
    }
  }
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
