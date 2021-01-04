// this basics
// point from objects

const mugiwara = {
  name: 'lutfy',
  memberShp: true,
  sayHi: function () {
    console.log(`hello ${this.name} your ${this.memberShp} from SHP`);
  },
};

mugiwara.sayHi(); //hello lutfy your true from SHP
console.log(this); // here {} this windows
