// ES6
// Basic constructor 01-07 chapter

class Account {
  // constructor
  constructor(fullName, initialBalance) {
    this.name = fullName;
    this.balance = initialBalance;
  }
  // prototype here will input to constructor
  bank = 'Mandiri Indonesia';
  // function
  deposite(amount) {
    this.balance += amount;
    console.log(
      `Hello ${this.name} your balance on ${this.bank} is Rp. ${this.balance} `
    );
  }
}

// field object don't forget create new
const kelly = new Account('kelly jane', 20000);
console.log(kelly);
kelly.deposite(40000);
// output: Hello kelly jane your balance on Mandiri Indonesia is Rp. 60000

const jenny = new Account('jenny edward', 15000);
jenny.deposite(15000);
// Hello jenny edward your balance on Mandiri Indonesia is Rp. 30000
