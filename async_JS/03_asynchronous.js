// make soup
// boil wate 10 min
// chop onion
// add carrots boil for 5 min
// chop carrots
// add onion boil for 5 min

// disini dia mencetak
// boil wate.....
// chop onion.....
// kemudian still busy menghitung counter sampai 10000
// jika sudah baru menuju ke setTimeout done
// karena javascript membaca perbaris line by line
// mau bolWaters(0), atau 1000 dia tetap membaca baris perbaris
// jadi ketika loop selesai otomatis setTimeout berjalan terakhir
boilWaters(0);
console.log('chop onion');
for (let i = 0; i < 1000; i++) {
  console.log('still busy....');
}

function boilWaters(time) {
  console.log(`boil wate.....`);
  setTimeout(() => {
    console.log('done');
  }, time);
}
