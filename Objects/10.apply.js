const lutfy = {
  name: 'mugiwara',
  last: 'no lutfy',
};

const zoro = {
  name: 'rorona',
  last: 'zoro',
};

function memberSHP(country, city) {
  console.log(`Hello ${this.name} ${this.last} from ${country}, ${city}`);
}

// different call & apply
/*
memberSHP.call(lutfy, 'japan', 'bandung');
memberSHP.call(zoro, 'japan', 'wano');
memberSHP.call({ name: 'sanji', last: 'vinsmoke' }, 'japan', 'master chef'); 
*/

// apply use array []
memberSHP.apply(lutfy, ['japan', 'bandung']);
memberSHP.apply(zoro, ['japan', 'wano']);
memberSHP.apply({ name: 'sanji', last: 'vinsmoke' }, ['japan', 'master chef']);
