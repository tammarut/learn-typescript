"use strict";
// 📌explicit types
let char;
let age;
let isLoggedIn;
age = 20;
isLoggedIn = true;
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌arrays
let ninjas = [];
ninjas.push('foo');
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌union types
let mixed = [];
mixed.push('foomix');
mixed.push('49');
mixed.push(false);
console.log('🔥', mixed);
let uid;
uid = 123;
uid = '123';
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌objects
let ninjaOne;
ninjaOne = { name: 'foo', age: 20 };
console.log('🔥', ninjaOne);
let ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 30,
    beltColor: 'red'
};
console.log('🔥', ninjaTwo);
let width = 20;
width = true;
width = 'foo';
width = { value: '60' };
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌any
let ninjaThree;
ninjaThree = { name: 'ninjaThree', age: 20 };
console.log('🔥', ninjaThree);
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log('🔰', Direction);
