"use strict";
var obj = [
    {
        title: "a",
        done: true
    },
    {
        title: "b",
        done: false
    },
    {
        title: "c",
        done: true
    },
    {
        title: "c",
        done: false
    }
];
console.log("🔴Before:", obj);
obj.sort(function (a, b) {
    return a.done - b.done;
});
console.log("🟢After:", obj);
