// Array.from and Arra.of - Not on the prototype

// from - returns array obj from any obj with a length
// property or in a iterable obj
// from turns array-like/ish into array - string, nodelist,set

const udemy = 'udemy';
console.log(Array.from(udemy)); //[ 'u', 'd', 'e', 'm', 'y' ]

// function
function countTotal() {
  // this array obj can't use map
  // console.log(arguments); // [Arguments] { '0': 20, '1': 10, '2': 30 }
  // solution
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(total); //60
}

countTotal(20, 10, 30);
