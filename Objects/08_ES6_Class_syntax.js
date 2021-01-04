class Banking {
  // constructor
  constructor(value, initial_balance) {
    this.value = value;
    this.balance = initial_balance;
  }

  // And here you can add same like prototype too
  bank = 'mandiri syariah';
  // For Method here
  deposite(amount) {
    this.balance *= amount;
    console.log(
      `Your value is ${this.value} with balance ${this.balance} on bank ${this.bank}`
    );
  }
}

const mugiwara = new Banking(20, 4500);

console.log(mugiwara); // Banking { value: 20, balance: 4500 }
console.log(mugiwara.value); //20
mugiwara.deposite(2000); // Your value is 20 with balance 9000000
