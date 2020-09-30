"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
        this._age = 0;
    }
    Object.defineProperty(Human.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (newAge > 0 && newAge <= 100) {
                this._age = newAge;
            }
        },
        enumerable: false,
        configurable: true
    });
    /* setAge(age: number) { */
    /*   if (age > 0 && age <= 100) this._age = age; */
    /* } */
    Human.prototype.printName = function () {
        console.log('▶My name is', this.name);
    };
    return Human;
}());
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman(name, color) {
        var _this = 
        // Need super() ⇨for child class
        _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    return Woman;
}(Human));
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name) {
        return _super.call(this, name) || this;
    }
    Man.prototype.ordain = function () {
        console.log(this.name + " has already been a Buddhist monk!");
    };
    return Man;
}(Human));
// 🔱Static
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.PI = 3.14;
    return Circle;
}());
console.log('🔰', Circle.PI);
var circleClass = Circle;
console.log('🔰', circleClass);
var dew = new Human('Dew');
var L = new Woman('Top', 'pink');
var akira = new Man('Akira');
akira.ordain();
akira.age = 20;
console.log("\uD83D\uDD25" + akira.age);
