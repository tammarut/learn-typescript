"use strict";
const jame = {
    name: 'Jame',
    age: 20,
    speak(text) {
        console.log('🔥', text);
    },
    spend(amount) {
        console.log('🔥', amount);
        return amount;
    }
};
console.log('🔥', jame.name);
//🚩 class
class Invoice {
    /* readonly client: string */
    /* private details: string */
    /* public amount: number */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Jame', 'Work on website', 200);
const invTwo = new Invoice('Foo', 'Work on Bar', 100);
let invoices = [];
invoices.push(invOne, invTwo);
console.log('🟢', invoices);
invoices.forEach((inv) => {
    console.log('📀', inv.client, inv.amount);
    console.log('🌀', inv.format());
});
