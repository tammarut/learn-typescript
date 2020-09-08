import {HasFormatter} from '../interfaces/hasFormatter'

//🚩 class
export class Payment implements HasFormatter {
  /* readonly client: string */
  /* private details: string */
  /* public amount: number */

  // ⚡Alternative
  constructor(readonly recipient: string, private details: string, public amount: number) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`
  }
}
