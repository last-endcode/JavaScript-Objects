function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check again your element ${selection} not found`);
}

// use class
class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    // console.log(this.value); 100 / 200
    // console.log(this.element); // result element first-container and secondcontainer
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;
    // bind to action
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }
  // method here : increase(),decrease(),reset()
  increase() {
    this.value++; //for add +1
    this.valueDOM.textContent = this.value; //update
  }
  decrease() {
    this.value--; //for add +1
    this.valueDOM.textContent = this.value; //update
  }
  reset() {
    this.value = 0; // reset to 0
    this.valueDOM.textContent = this.value; //update
  }
}

// create object
const firstCounter = new Counter(getElement('.first-counter'), 10);
const secondCounter = new Counter(getElement('.second-counter'), 10);
