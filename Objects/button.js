// first create object
const counter = {
  count: 0,
  // function
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

// select item
const btn = document.querySelector('.increment');

//  WRONG!
// btn.addEventListener('click', counter.increment);
// // ketika diklik output:
// // <button class="increment">increment</button>
// // but with count NaN is not solution

// btn.addEventListener('click', counter.increment.bind(counter));
// // it's work use bind ketika diklik menghasilkan value for count
// // tapi tidak bisa meremove still issue

//  *** SOLUTION
const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);
// btn.removeEventListener('click', increment);
