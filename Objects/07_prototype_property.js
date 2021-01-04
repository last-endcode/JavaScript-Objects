function Banking(value, initial_balance) {
  this.value = value;
  this.balance = initial_balance;
  this.bank = 'mandiri';
}

// create Prototype
Banking.prototype.banks = 'Mandiri Syariah';

// Selalu perhatikan stiap membuat obj parameter const func
const john = new Banking(20, 200);
console.log(john); // Banking { value: 20, balance: 200, bank: 'mandiri' }
console.log(john.banks); // Mandiri Syariah

// create new prototype again
Banking.prototype.deposite = function (amount) {
  this.balance *= amount;
  console.log(
    `Hello your value is ${this.value} with balance ${this.balance} on bank ${this.banks}`
  );
};

// print deposite
john.deposite(4000);
/*output : Hello your value is 20 with balance 800000 on bank Mandiri Syariah */
const boby = new john.constructor(1000, 5000);
boby.deposite(150000);
// output: Hello your value is 1000 with balance 750000000 on bank Mandiri Syariah
