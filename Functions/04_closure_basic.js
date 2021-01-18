// Closure basic example

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showDisplay() {
    console.log(`Hello ${name} with balance is ${balance}`);
  }
  // you should
  return showDisplay;
}

// invoke it, and () => for invoke it showDisplay
newAccount('jane', 550000)();

// or you can create new 2 instance obj
const kelly = new newAccount('kelly', 450000);
const melly = new newAccount('melly', 345000);

// invoke it
kelly();
melly();
