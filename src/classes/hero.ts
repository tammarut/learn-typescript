abstract class Hero {
  constructor(public name: string, public hp: number, public mp: number, public moveSpeed: number) {}

  get description() {
    return `
    Name: ${this.name}
    HP: ${this.hp}
    MP: ${this.mp}
    Move Speed: ${this.moveSpeed}
    `
  }

  abstract skill1(): void
  abstract skill2(): void
  abstract skill3(): void
  abstract skill4(): void
}

class Zeus extends Hero {
  skill1() {
    console.log('⚡Chain bolt')
  }
  skill2() {
    console.log('⚡Thunder')
  }

  skill3() {
    console.log('⚡+damage')
  }

  skill4() {
    console.log('⚡Thunder all heros')
  }
}

class Void extends Hero {
  skill1() {
    console.log('Jump')
  }
  skill2() {
    console.log('Dodge')
  }
  skill3() {
    console.log('Lock foot')
  }

  skill4() {
    console.log('Dome')
  }
}

const zeusInstance = new Zeus('Zeus', 500, 500, 300)
console.log(zeusInstance.description)
zeusInstance.skill1()
zeusInstance.skill2()
