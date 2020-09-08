//📃Example 1
let talk: (a: string, b: string) => void
talk = (name: string, word: string) => {
   console.log(`🚩 ${name} says ${word}`)
}
talk('Jame', 'haha')

//📃Example 2
let calc: (a: number, b: number, c: string) => number
calc = (numberOne: number, numberTwo: number, action: string) => {
   if (action === 'add') {
      return numberOne + numberTwo
   } else {
      return numberOne - numberTwo
   }
}
console.log('🚩', calc(1, 2, 'add'))

//📃Example 3
let slog: (obj: { name: string, age: number }) => void
type profile = { name: string, age: number }
slog = (ninja: profile) => {
   console.log(`📍 ${ninja.name} is ${ninja.age} years old`)
}
slog({name: 'Pan', age: 20})