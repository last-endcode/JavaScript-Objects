function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new error(
    `please check again for element cause ${selection} not exist`
  );
}

class Counter {
  constructor(element, nilai) {
    this.counter = element;
    this.nilai = nilai;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.nilaiDOM = element.querySelector('.value');
    this.nilaiDOM.textContent = this.nilai;
    // ******  click ******
    // console.log(this.increase); output:
    // ƒ increase() {
    // this.nilai++;
    // this.nilaiDOM.textContent = this.nilai;
    // console.log(this); #checked
    // use bind cz increase include Counter
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }
  increase() {
    this.nilai++;
    this.nilaiDOM.textContent = this.nilai;
    // console.log(this); #checked
  }
  decrease() {
    this.nilai--;
    this.nilaiDOM.textContent = this.nilai;
    // console.log(this); #checked
  }
  reset() {
    this.nilai = 0;
    this.nilaiDOM.textContent = this.nilai;
  }
}

const firstCounter = new Counter(getElement('.first-counter'), 10);
const secondCounter = new Counter(getElement('.second-counter'), 10);

// here will checked
// bahwa niali 10 akan bertmbah 1
firstCounter.increase();
firstCounter.decrease();
