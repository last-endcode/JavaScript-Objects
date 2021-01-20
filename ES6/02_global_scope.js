// global
let names = 'dncode';
let result = 'true';

if (true) {
  let names = 'john doe inside if';
  console.log(`this is true`);
}

console.log(names);
/* output:
this is true
dncode

if will print for first cz true
and names still dncode because let names on if statement is local variable not global
*/

// example again
{
  let shpName = 'mugiawara no lutfy';
  console.log(`${shpName} & ${names}`);
}

{
  let shpName = 'mugiawara no lutfy';
  console.log(`${shpName} & ${names}`);
}

// outpus is: dncode will print cause is global variable
// mugiawara no lutfy & dncode
// mugiawara no lutfy & dncode
