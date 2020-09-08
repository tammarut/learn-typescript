"use strict";
class Account {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
class SavingsAccount extends Account {
    constructor(balance) {
        super(balance);
    }
    withdraw(amount) {
        if (this.balance - amount >= 0)
            this.balance -= amount;
    }
}
class FixedDepositAccount extends Account {
    constructor(balance) {
        super(balance);
        this.openDate = new Date();
    }
    withdraw(amount) {
        const numberOfMonths = new Date().getMonth() - this.openDate.getMonth();
        if (this.balance - amount < 0)
            return;
        if (numberOfMonths < 6)
            return console.log("Cannot withdraw(month < 6) =", numberOfMonths);
        this.balance -= amount;
    }
}
const foo = new FixedDepositAccount(1000);
console.log("🔥", foo);
foo.withdraw(500);
console.log("🔥", foo);
