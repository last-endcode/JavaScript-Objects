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

// *** BIND, assign it, and use later it
const zorronew = memberSHP.bind(zoro, 'tokyo', 'wano');
zorronew(); // Hello rorona zoro from tokyo, wano
