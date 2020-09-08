"use strict";
const logDetails = (uid, item) => {
    console.log(`🔥 ${item} has a uid of ${uid}`);
};
logDetails('100', 'foo');
const hi = (user) => {
    console.log(`🔥 ${user.name} says hi❗`);
};
const hiAgain = (user) => {
    console.log(`🔥 ${user.name} says hi again❗`);
};
let user = {
    name: 'arima',
    uid: '400'
};
hi(user);
hiAgain(user);
