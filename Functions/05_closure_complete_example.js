// closure complete

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hello ${name} your balance is ${balance}`);
  }
  function deposite(amount) {
    balance += amount;
    showBalance();
  }
  function withDraw(amount) {
    // *** IF amount bigger than balance
    if (amount > balance) {
      console.log(
        `Sorry ${name} your amount : ${amount} bigger than ${balance}`
      );
      return;
    }
    // false
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposite: deposite, withDraw: withDraw };
}

// invoke it
const john = new newAccount('john', 3000);

john.showBalance(); // 3000
john.deposite(3000); // 6000
john.withDraw(7000); // Sorry john your amount : 7000 bigger than 6000
// cause amount (6000) bigger than from 6000 (deposite)
