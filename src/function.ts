let greet: Function

greet = () => {
   console.log('foo bar')
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌Normal function
const add = (a: number, b: number, c: number | string = 10): void => {
   console.log(`🔥 ${a + b}`)
   console.log('🟢', typeof c)
}
add(1, 2, '20')

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 📌Return function
const minus = (a: number, b: number): number => {
   return a + b
}
let result = minus(10, 7)
console.log('🟩', result)