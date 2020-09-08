"use strict";
var nums = [1, 2, 3];
console.log("🔥", nums);
// 🌀Tuple
var studentAndScore;
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
var list = [12, "foo", true];
console.log("🔥", list);
// void
function setName(name) {
    console.log("🔥", name);
}
// Type Assertions
var iAmString = "Hell";
var strLen = iAmString.length;
console.log("💨", strLen);
