const shp_list = {
  firstName: 'mugiwara no',
  lastName: 'luffy',
  sayToHello: function () {
    console.log(`Hello captain ${this.firstName} ${this.lastName}`);
  },
};

// this keyword get value object dari dalam object itu sndiri
shp_list.sayToHello();
