"use strict";
var logDetails = function (uid, item) {
    console.log("\uD83D\uDD25 " + item + " has a uid of " + uid);
};
logDetails('100', 'foo');
var hi = function (user) {
    console.log("\uD83D\uDD25 " + user.name + " says hi\u2757");
};
var hiAgain = function (user) {
    console.log("\uD83D\uDD25 " + user.name + " says hi again\u2757");
};
var user = {
    name: 'arima',
    uid: '400'
};
hi(user);
hiAgain(user);
