// clousures
// gives you an access to an outer functions scope
// from an innner function
// make private variables with closures

function outer() {
  // membuat variable just for function
  let privateVar = 'secret';
  function inner() {
    console.log(`hello world is ${privateVar}`);
  }
  // add return
  return inner;
  inner(); //invoke
}

// console.log(privateVar); //error cz not defined

// menggunakan () tuk memanggil juga innner
// jika tanpa () tidak akan menghasilkan apapun
outer()(); // hello world

// atau mengguakan variable tuk memanggil innner
// const value = outer();
// value(); // will error solution use return inner function
