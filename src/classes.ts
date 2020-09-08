import {Invoice} from './classes/invoice'
import {Payment} from './classes/payment'
import {HasFormatter} from './interfaces/hasFormatter'

//🚩 interfaces
interface IsPerson {
  name: string
  age: number
  speak(word: string): void
  spend(a: number): number
}

const jame: IsPerson = {
  name: 'Jame',
  age: 20,
  speak(text: string): void {
    console.log('🔥', text)
  },
  spend(amount: number): number {
    console.log('🔥', amount)
    return amount
  }
}
console.log('🔥', jame.name)

const invOne = new Invoice('Jame', 'Work on website', 200)
const invTwo = new Invoice('Foo', 'Work on Bar', 100)

let invoices: Invoice[] = []
invoices.push(invOne, invTwo)
console.log('🟢', invoices)

invoices.forEach((inv) => {
  console.log('📀', inv.client, inv.amount)
  console.log('🌀', inv.format())
})

let docOne: HasFormatter
let docTwo: HasFormatter
docOne = new Invoice('pleum', 'car', 300)
docTwo = new Payment('dew', 'bus', 500)

let docs: HasFormatter[] = []
docs.push(docOne, docTwo)
console.log('📍', docs[0].format())
console.log('📍', docs[1].format())
