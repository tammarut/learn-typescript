"use strict";
var greet;
greet = function () {
    console.log('foo bar');
};
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌Normal function
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log("\uD83D\uDD25 " + (a + b));
    console.log('🟢', typeof c);
};
add(1, 2, '20');
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌Return function
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log('🟩', result);
