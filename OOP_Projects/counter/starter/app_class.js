// getElement for select items
function getElement(selection) {
  const element = document.querySelector(selection);
  // if element exist return element
  // if not get message error
  if (element) {
    return element;
  }
  throw new Error(
    `please checked again cause this element ${selection} not exist`
  );
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    // #2 now you can select btn here,
    // krna kita sudah membuat contoh instance new Counter
    this.decreaseBtn = element.querySelector('.decrease');
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    // console.log(this.resetBtn);
    // check will output 2 element btn reset sesuai dgn
    // 2 object yang dibuat <button class="btn reset">reset</button>
    // krna cek log element hasilnya adalah .first-container & .second-container
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;
    // bind this to all function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    this.increaseBtn.addEventListener('click', this.increase);
    this.resetBtn.addEventListener('click', this.reset);
    this.decreaseBtn.addEventListener('click', this.decrease);
  }
  // function
  increase() {
    this.value++; //increment
    // update
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
