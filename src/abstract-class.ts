abstract class Account {
  constructor(protected balance: number) {}

  deposit(amount: number) {
    this.balance += amount;
  }

  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  constructor(balance: number) {
    super(balance);
  }

  withdraw(amount: number): void {
    if (this.balance - amount >= 0) this.balance -= amount;
  }
}

class FixedDepositAccount extends Account {
  private openDate: Date;

  constructor(balance: number) {
    super(balance);
    this.openDate = new Date();
  }

  withdraw(amount: number): void {
    const numberOfMonths = new Date().getMonth() - this.openDate.getMonth();
    if (this.balance - amount < 0) return;
    if (numberOfMonths < 6)
      return console.log("Cannot withdraw(month < 6) =", numberOfMonths);

    this.balance -= amount;
  }
}

const foo = new FixedDepositAccount(1000);
console.log("🔥", foo);

foo.withdraw(500);
console.log("🔥", foo);
