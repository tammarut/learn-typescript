"use strict";
//📃Example 1
var talk;
talk = function (name, word) {
    console.log("\uD83D\uDEA9 " + name + " says " + word);
};
talk('Jame', 'haha');
//📃Example 2
var calc;
calc = function (numberOne, numberTwo, action) {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
console.log('🚩', calc(1, 2, 'add'));
//📃Example 3
var slog;
slog = function (ninja) {
    console.log("\uD83D\uDCCD " + ninja.name + " is " + ninja.age + " years old");
};
slog({ name: 'Pan', age: 20 });
