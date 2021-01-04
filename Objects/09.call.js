// you can write a method that can be used on different objects.

function memberShp(city, country) {
  return `Hello ${this.name} ${this.last} your from SHP from ${city} ${country}`;
}

const lutfy = {
  name: 'mugiwara',
  last: 'no lutfy',
};

const zoro = {
  name: 'rorona',
  last: 'zoro',
};

// call function.call(targetobject)
let leader = memberShp.call(lutfy);
console.log(leader); //Hello mugiwara no lutfy your from SHP
let deputy_leader = memberShp.call(zoro);
console.log(deputy_leader); //Hello rorona zoro your from SHP

//  **** Use argument
// bisa ditambahkan dalam function memberShp
// semisal city, country
leader = memberShp.call(lutfy, 'batak', 'indonesia');
console.log(leader); //
deputy_leader = memberShp.call(zoro, 'bandung', 'japan');
console.log(deputy_leader); // Hello rorona zoro your from SHP from bandung japan
