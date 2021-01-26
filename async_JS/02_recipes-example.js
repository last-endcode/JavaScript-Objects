// make soup
// boil wate 10 min
// chop onion
// add carrots boil for 5 min
// chop carrots
// add onion boil for 5 min

boilWaters(1000);
console.log('chop onion');
boilWaters(5000);
console.log('chop carrots');
boilWaters(5000);

function boilWaters(time) {
  console.log(`boiling....`);
  for (let i = 0; i < time; i++) {
    console.log('still not done');
  }
  console.log('done...');
}
