"use strict";
// 📌explicit types
var char;
var age;
var isLoggedIn;
age = 20;
isLoggedIn = true;
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌arrays
var ninjas = [];
ninjas.push('foo');
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌union types
var mixed = [];
mixed.push('foomix');
mixed.push('49');
mixed.push(false);
console.log('🔥', mixed);
var uid;
uid = 123;
uid = '123';
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌objects
var ninjaOne;
ninjaOne = { name: 'foo', age: 20 };
console.log('🔥', ninjaOne);
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 30,
    beltColor: 'red'
};
console.log('🔥', ninjaTwo);
var width = 20;
width = true;
width = 'foo';
width = { value: '60' };
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌any
var ninjaThree;
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
