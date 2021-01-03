// nested object

const newHobby = ['run', 'basket', 'football'];
const notRandom = 'Dumpak dug dug deeerrr';
const john = {
  firstName: 'john',
  status: {
    married: false,
    student: true,
  },
  skills: {
    technology: {
      webdesign: ['html', 'css', 'figma', 'javascript'],
      backend: ['nodejs', 'django'],
    },
  },
  hobby: {
    manga: {
      read: ['onepiece', 'sololeveling'],
      sport: newHobby,
    },
  },
  randomhere: notRandom,
};

// access
console.log(john.status.married); //false
console.log(john.status.skills); //undefined
console.log(
  john.skills.technology.webdesign[john.skills.technology.webdesign.length - 1]
); //javascript
console.log(john.hobby.manga.read); //['onepiece', 'sololeveling'];
console.log(john.hobby.manga.sport); //[ 'run', 'basket', 'football' ]
console.log(john.randomhere); //random
