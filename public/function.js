"use strict";
let greet;
greet = () => {
    console.log('foo bar');
};
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌Normal function
const add = (a, b, c = 10) => {
    console.log(`🔥 ${a + b}`);
    console.log('🟢', typeof c);
};
add(1, 2, '20');
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌Return function
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log('🟩', result);
