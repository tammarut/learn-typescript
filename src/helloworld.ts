let nums: number[] = [1, 2, 3];
console.log("🔥", nums);

// 🌀Tuple
let studentAndScore: [string, number];
studentAndScore = ["Foo", 12];
console.log("①", studentAndScore);

// 📚 Enum
enum TrafficLight {
  Red = 1,
  Amber,
  Green
}
console.log("🔥", TrafficLight);

// Any
let list: any[] = [12, "foo", true];
console.log("🔥", list);

// void
function setName(name: string): void {
  this.name = name;
}

// Type Assertions
let iAmString: any = "Hell";
let strLen: number = (<string>iAmString).length;
console.log("💨", strLen);
