// 🛑Composition over inheritance
interface IHeroSkill {
  skill1(): void
  skill2(): void
  skill3(): void
  skill4(): void
}

interface IHeroDetail {
  name: string
  hp: number
  mp: number
  moveSpeed: number
}

abstract class Hero implements IHeroSkill {
  constructor(protected heroDetail: IHeroDetail) {}

  get description() {
    return `
    Name: ${this.heroDetail.name}
    HP: ${this.heroDetail.hp}
    MP: ${this.heroDetail.mp}
    Move Speed: ${this.heroDetail.moveSpeed}
    `
  }

  abstract skill1(): void
  abstract skill2(): void
  abstract skill3(): void
  abstract skill4(): void
}

// Implementation
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

const zeusDetail: IHeroDetail = {
  name: 'Zeus',
  hp: 500,
  mp: 600,
  moveSpeed: 500
}
const zeusInstance = new Zeus(zeusDetail)
console.log(zeusInstance.description)
zeusInstance.skill1()
zeusInstance.skill2()
