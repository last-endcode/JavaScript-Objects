const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector('.increment');

// fail will NaN
// btn.addEventListener('click', counter.increment);

// solution you can use bind but issue can't removeEvent
// btn.addEventListener('click', counter.increment.bind(counter));

// solution
const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);
btn.removeEventListener('click', increment);
