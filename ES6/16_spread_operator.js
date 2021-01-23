// Spread operator
// Allows an iterable to spread / expand individually inside reciever
// Split into single items and copy them

const udemy = 'udemy';

const letter = [...udemy]; // [ 'u', 'd', 'e', 'm', 'y' ]

// console.log(letter);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

const friend = [...boys, ...girls, bestFriend];
console.log(friend);
// [ 'john', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

// reference
// const newFriends = friend;
const newFriends = [...friend]; //but if use spread friend still use originall array
newFriends[0] = 'jane';
console.log(newFriends); //john will change be jane
console.log(friend); //john will change be jane cz with allocate same memory if use re-assign
