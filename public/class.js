"use strict";
class Human {
    constructor(name) {
        this.name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (age > 0 && age <= 100)
            this._age = age;
    }
    /* setAge(age: number) { */
    /*   if (age > 0 && age <= 100) this._age = age; */
    /* } */
    printName() {
        console.log("▶My name is", this.name);
    }
}
class Woman extends Human {
    constructor(name, color) {
        // Need super() ⇨for child class
        super(name);
        this.color = color;
    }
}
class Man extends Human {
    constructor(name) {
        super(name);
    }
    ordain() {
        console.log(`${this.name} has already been a Buddhist monk!`);
    }
}
// 🔱Static
class Circle {
}
Circle.PI = 3.14;
console.log("🔰", Circle.PI);
const circleClass = Circle;
console.log("🔰", circleClass);
const dew = new Human("Dew");
const L = new Woman("Top", "pink");
const akira = new Man("Akira");
akira.ordain();
dew.printName();
dew.age = 100;
dew.printName();
console.log(dew);
L.printName();
