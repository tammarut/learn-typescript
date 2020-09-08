"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoice_1 = require("./classes/invoice");
var payment_1 = require("./classes/payment");
var jame = {
    name: 'Jame',
    age: 20,
    speak: function (text) {
        console.log('🔥', text);
    },
    spend: function (amount) {
        console.log('🔥', amount);
        return amount;
    }
};
console.log('🔥', jame.name);
var invOne = new invoice_1.Invoice('Jame', 'Work on website', 200);
var invTwo = new invoice_1.Invoice('Foo', 'Work on Bar', 100);
var invoices = [];
invoices.push(invOne, invTwo);
console.log('🟢', invoices);
invoices.forEach(function (inv) {
    console.log('📀', inv.client, inv.amount);
    console.log('🌀', inv.format());
});
var docOne;
var docTwo;
docOne = new invoice_1.Invoice('pleum', 'car', 300);
docTwo = new payment_1.Payment('dew', 'bus', 500);
var doc = [];
doc.push(docOne, docTwo);
console.log('📍', doc[0].format());
console.log('📍', doc[1].format());
