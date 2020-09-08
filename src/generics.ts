// ⛔GENERICS
const addUID = <T extends object>(obj: T) => {
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

// ENUMS
enum resourceType {
   BOOK,
   AUTHOR,
   FILM,
   DIRECTOR,
   PERSON
}

// ⚡Generics with Interface
interface Resource<T> {
   uid: number,
   resourceType: resourceType,
   data: T
}

const docThree: Resource<object> = {
   uid: 1,
   resourceType: resourceType.PERSON,
   data: { name: 'Jane' }
}
console.log('⚡', docThree)

const docFour: Resource<string[]> = {
   uid: 2,
   resourceType: resourceType.BOOK,
   data: ['phone', 'food', 'chair']
}

console.log('⚡', docFour)