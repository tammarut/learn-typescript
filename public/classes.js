"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoice_1 = require("./classes/invoice");
var payment_1 = require("./classes/payment");
//一一一一一一一一一一一一一一一一一一一一一一
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
//一一一一一一一一一一一一一一一一一一一一一一
var invOne = new invoice_1.Invoice('Jame', 'Work on website', 200);
var invTwo = new invoice_1.Invoice('Foo', 'Work on Bar', 100);
var invoices = [];
invoices.push(invOne, invTwo);
console.log('🟢', invoices);
invoices.forEach(function (inv) {
    console.log('📀', inv.client, inv.amount);
    console.log('🌀', inv.format());
});
//一一一一一一一一一一一一一一一一一一一一一一
var docOne;
var docTwo;
docOne = new invoice_1.Invoice('pleum', 'car', 300);
docTwo = new payment_1.Payment('dew', 'bus', 500);
var docs = [];
docs.push(docOne, docTwo);
console.log('📍', docs[0].format());
console.log('📍', docs[1].format());
