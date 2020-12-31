function Banking(fullName, initialBalance) {
  this.name = fullName;
  this.balance = initialBalance;
  // function
}

// here you can create New prototype
Banking.prototype.bank = 'Mandiri';
Banking.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(
    `Hello ${this.name} your balance on the bank ${this.bank} for now  is ${this.balance}`
  );
};
const kelly = new Banking('kelly', 2000);
const jane = new Banking('jane', 0);

console.log(kelly);
console.log(jane);
kelly.deposit(2200);
jane.deposit(10560000);

// output:
// Hello kelly your balance on the bank Mandiri for now  is 4200
// Hello jane your balance on the bank Mandiri for now  is 10560000
