"use strict";
//📃Example 1
let talk;
talk = (name, word) => {
    console.log(`🚩 ${name} says ${word}`);
};
talk('Jame', 'haha');
//📃Example 2
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
console.log('🚩', calc(1, 2, 'add'));
//📃Example 3
let slog;
slog = (ninja) => {
    console.log(`📍 ${ninja.name} is ${ninja.age} years old`);
};
slog({ name: 'Pan', age: 20 });
