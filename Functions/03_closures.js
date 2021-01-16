// clousures
// gives you an access to an outer functions scope
// from an innner function
// make private variables with closures

function shpName(firstName, lastName) {
  let member = 'SHP';
  function addName(balance) {
    console.log(
      `Hello member ${member} : ${firstName} ${lastName} with ${
        balance * 10000000
      }`
    );
  }
  return addName;
}

// invoke, and use this () for calling inner function
shpName('mugiwara', 'no lutfy')(100000000);

// create 2 instance obj
const zoro = new shpName('rorona', 'zoro');
const sanji = new shpName('sanji', 'vinsmoke');
zoro(4000000);
sanji(500000);
