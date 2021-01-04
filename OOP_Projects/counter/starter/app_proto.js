function getElement(selection) {
  const element = document.querySelector(selection);
  // ** IF exist return,
  // ** IF NOT Send ERROR Information
  if (element) {
    return element;
  }
  throw new Error(
    `Please check again element on html ${selection} its not found`
  );
}

function Counter(element, value) {
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

// *** add prototype for:
// *** increase, decrease, reset
Counter.prototype.increase = function () {
  console.log(this);
  this.value++; //for add +1
  this.valueDOM.textContent = this.value; //update
};

Counter.prototype.decrease = function () {
  this.value--; //for add -1
  this.valueDOM.textContent = this.value; //update
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value; //update
};

// ingat! pembuatan obj sesuaikan dgn isi param func counter
// disini ada 2 param element dan value
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

// example just for check
// firstCounter.reset();

/* NOTE 
untuk penggunaan btn , value
menggunakan element.querySelector karena
element2 tsb termasuk kedalam element yang dibuat 
dalam 2 object tsb .first-counter, & .second-counter
*/
