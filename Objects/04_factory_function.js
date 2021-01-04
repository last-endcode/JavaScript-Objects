// A factory function is any function which is not a class or constructor that returns a (presumably new) object.
// In JavaScript, any function can return an object. When it does so without the new keyword,
// it’s a factory function.

// create function
function createMemberShp(firstName, lastName) {
  // remember use return here
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    },
  };
}

// dont forget field argument cz function use param
const lutfy = createMemberShp('mugiwara no', 'luttfy');
lutfy.fullName(); // Hello mugiwara no luttfy
const zoro = createMemberShp('Roronoa', 'Zorro');
zoro.fullName(); //Hello Roronoa Zorro

/*****
Cara ini lebih efektif dibandingkan harus membuat object
seperti membuat object lutfy terlebih dahulu, dilanjut
dengan object zoro terlebih dahulu jika harus membuat 3000 lebih 
tidak efektif juga jadi factory funciton adalah solusinya..
******/
