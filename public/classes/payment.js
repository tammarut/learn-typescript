"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
//🚩 class
var Payment = /** @class */ (function () {
    /* readonly client: string */
    /* private details: string */
    /* public amount: number */
    // ⚡Alternative
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.recipient + " is owed $" + this.amount + " for " + this.details;
    };
    return Payment;
}());
exports.Payment = Payment;
