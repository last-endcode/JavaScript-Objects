// Destructuring
// faster/easier way to access/ unpack from arrays
// objects into variables
// objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// sama dgn swap variable array tadi
// dan disini juga bisa menggunakan first:firstName
// firstName adalah semacam tag
// dan tuk mengakses jane menggunakan function
// siblings:{sister:nametag}
const {
  first: firstName,
  last,
  city,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(firstName, last, city, favoriteSibling);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName, lastName, sister);
