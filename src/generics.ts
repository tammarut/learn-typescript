// ⛔GENERICS
const addUID = <T extends {name:string}>(obj: T) => {
   let uid = Math.floor(Math.random() * 100)
   return { ...obj, uid }
}

let docOne = addUID({
   name: 'foo',
   age: 20
})

// 🚫Not work!
// let docTwo = addUID('bar')

console.log('🔥', docOne.name)

// ⚡Generics with Interface
interface Resource<T> {
   uid: number,
   resourceName: string,
   data: T
}

const docThree: Resource<object> = {
   uid: 1,
   resourceName: 'person',
   data: { name: 'Jane' }
}

const docFour: Resource<string[]> = {
   uid: 2,
   resourceName: 'cart',
   data: ['phone','food','chair']
}

console.log('⚡', docFour)