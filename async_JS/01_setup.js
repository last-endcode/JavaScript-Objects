// JS is single threaded, synchronous language
console.log('one');
console.log('two');
console.log('three');
stillProcess();
console.log('fours');

function stillProcess() {
  for (let i = 0; i < 1000; i++) {
    console.log(`still processs....`);
  }
  console.log('done');
}
