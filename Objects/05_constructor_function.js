//we need a "blueprint" for creating many objects of the same "type".
// constructor function
// new - creates new object, points to it, omit return

// create constructor function
function MemberSHP(firstName, lastName) {
  // * use this for new instance & assign use param
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  };
  // console.log(this);
}

// create blue print use NEW keyword
const lutfy = new MemberSHP('mugiwara no', 'lutfy');
lutfy.fullName(); // Hello mugiwara no lutfy
const zoro = new MemberSHP('Rorona', 'Zoro');
zoro.fullName(); //Hello Rorona Zoro

/*
CATATAN 
jika this.firstName di hapus this nya maka obj yang dibuat menjadi undefined
misal this.firstName = firstName menjadi firstName = firstName
otomatis hasilnya menjadi Hello undefined lutfy, karena parameter pertama tidak merujuk
pada objek yang dibuat, dan selalu ingat bahwa point dari object adalah karena this,
dan this merujuk pada object yang dibuat, dan objek yang dibuat merujuk pada this.

*/
