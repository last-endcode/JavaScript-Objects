const john = {
  name: 'john',
  age: 25,
};

const susy = {
  name: 'susy',
  age: 47,
};

function greeting(city, country) {
  console.log(
    `Hi, ${this.name} your age is ${this.age} live in ${city}, ${country}`
  );
}

//  **** BIND ****
//  assign , use lateer, arguments, - list of items

const infoSusy = greeting.bind(susy, 'paris', 'france');
// and now u can use peterparker for invoke
infoSusy();
