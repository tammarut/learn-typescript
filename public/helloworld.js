"use strict";
let nums = [1, 2, 3];
console.log("🔥", nums);
// 🌀Tuple
let studentAndScore;
studentAndScore = ["Foo", 12];
console.log("①", studentAndScore);
// 📚 Enum
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 1] = "Red";
    TrafficLight[TrafficLight["Amber"] = 2] = "Amber";
    TrafficLight[TrafficLight["Green"] = 3] = "Green";
})(TrafficLight || (TrafficLight = {}));
console.log("🔥", TrafficLight);
// Any
let list = [12, "foo", true];
console.log("🔥", list);
// void
function setName(name) {
    this.name = name;
}
// Type Assertions
let iAmString = "Hell";
let strLen = iAmString.length;
console.log("💨", strLen);
