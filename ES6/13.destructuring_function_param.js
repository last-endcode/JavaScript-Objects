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

function printPerson({ first, last, city }) {
  console.log(first, last, city);
}

printPerson(bob); //  bob sanders chicago
