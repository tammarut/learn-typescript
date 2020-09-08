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

//🚩 class
class Invoice {
  /* readonly client: string */
  /* private details: string */
  /* public amount: number */

  constructor(readonly client: string, private details: string, public amount: number) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('Jame', 'Work on website', 200)
const invTwo = new Invoice('Foo', 'Work on Bar', 100)

let invoices: Invoice[] = []
invoices.push(invOne, invTwo)
console.log('🟢', invoices)

invoices.forEach((inv) => {
  console.log('📀', inv.client, inv.amount)
  console.log('🌀', inv.format())
})
