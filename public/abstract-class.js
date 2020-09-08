"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(balance) {
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(balance) {
        return _super.call(this, balance) || this;
    }
    SavingsAccount.prototype.withdraw = function (amount) {
        if (this.balance - amount >= 0)
            this.balance -= amount;
    };
    return SavingsAccount;
}(Account));
var FixedDepositAccount = /** @class */ (function (_super) {
    __extends(FixedDepositAccount, _super);
    function FixedDepositAccount(balance) {
        var _this = _super.call(this, balance) || this;
        _this.openDate = new Date();
        return _this;
    }
    FixedDepositAccount.prototype.withdraw = function (amount) {
        var numberOfMonths = new Date().getMonth() - this.openDate.getMonth();
        if (this.balance - amount < 0)
            return;
        if (numberOfMonths < 6)
            return console.log("Cannot withdraw(month < 6) =", numberOfMonths);
        this.balance -= amount;
    };
    return FixedDepositAccount;
}(Account));
var foo = new FixedDepositAccount(1000);
console.log("🔥", foo);
foo.withdraw(500);
console.log("🔥", foo);
