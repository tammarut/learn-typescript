class Human {
  private _age: number;

  constructor(protected name: string) {}

  get age() {
    return this._age;
  }

  set age(age: number) {
    if (age > 0 && age <= 100) this._age = age;
  }

  /* setAge(age: number) { */
  /*   if (age > 0 && age <= 100) this._age = age; */
  /* } */

  printName() {
    console.log("▶My name is", this.name);
  }
}

class Woman extends Human {
  color: string;

  constructor(name: string, color: string) {
    // Need super() ⇨for child class
    super(name);

    this.color = color;
  }
}

class Man extends Human {
  constructor(name: string) {
    super(name);
  }

  ordain() {
    console.log(`${this.name} has already been a Buddhist monk!`);
  }
}

// 🔱Static
class Circle {
  static PI = 3.14;
}

console.log("🔰", Circle.PI);
const circleClass: typeof Circle = Circle;
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
