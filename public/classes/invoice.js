"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
//🚩 class
var Invoice = /** @class */ (function () {
    /* readonly client: string */
    /* private details: string */
    /* public amount: number */
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
