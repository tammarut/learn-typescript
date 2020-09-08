// 📌explicit types

let char: string
let age: number
let isLoggedIn: boolean

age = 20
isLoggedIn = true
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌arrays
let ninjas: string[] = []
ninjas.push('foo')

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌union types
let mixed: (string|number|boolean)[] =[]
mixed.push('foomix')
mixed.push('49')
mixed.push(false)
console.log('🔥',mixed)

let uid: string|number
uid = 123
uid = '123'

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌objects
let ninjaOne: object
ninjaOne = {name: 'foo', age: 20}
console.log('🔥', ninjaOne)

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}

ninjaTwo = {
  name: 'mario',
  age: 30,
  beltColor: 'red'
}
console.log('🔥', ninjaTwo)

let width:any= 20
width = true
width = 'foo'
width = {value: '60'}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌any
let ninjaThree: {name: any, age: any}
ninjaThree = {name: 'ninjaThree', age: 20}
console.log('🔥', ninjaThree)


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌enum
enum Direction {
  Up=1,
  Down,
  Left,
  Right
}
console.log('🔰', Direction)
