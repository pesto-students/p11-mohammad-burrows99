class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;
  
    constructor(accountNumber, balance, accountHolderName) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
      this.#accountHolderName = accountHolderName;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      this.#balance -= amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }
}
  
class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  
    withdraw(amount) {
      if (this.getBalance() - amount < 0) {
        console.log("Withdrawal failed. Insufficient balance.");
      } else {
        super.withdraw(amount);
      }
    }
}