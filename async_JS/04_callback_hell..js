// callback hell

boilWater();
console.log(`chop carrot`); // yg kedua dijalankan

function boilWater() {
  console.log(`boiling....`); //prtama dijalankan krna invoke
  // 1
  setTimeout(() => {
    console.log(`done...`); // dia running ke 3
    console.log(`add carrot`); // dia running ke 4
    //2
    setTimeout(() => {
      console.log(`carrot done`); //dia running ke 6
      console.log(`add onion`); //dia running ke 7
      //3
      setTimeout(() => {
        console.log(`onion done`); /// dan terakhir adalah done
      }, 10000); // waiting onion... 10 detik sebelum masuk sini
      console.log(`waiting onion.....`); //dia running ke 8 dan mnunggu 10 detik setTimeout ke 3
    }, 10000); // chop onions.. waiting 10detik sebelum masuk kesini
    console.log(`chop onions...waiting`); //dia running ke 5 dan mnunggu 10 detik setTimeout ke 2
  }, 100);
}

// Notes:
/*
boiling....
chop carrot
done...
add carrot
chop onions...waiting //setTimeout 1 mnunggu 5detik
carrot done
add onion
waiting onion..... //setTimeout 2 mnunggu 5detik
onion done
*/
