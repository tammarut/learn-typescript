// 📌Type alias
type StringOrNumber = string | number
type objWithName = { name: string, uid: StringOrNumber }

const logDetails = (uid: StringOrNumber, item: string) => {
   console.log(`🔥 ${item} has a uid of ${uid}`)
}

logDetails('100', 'foo')

const hi = (user: objWithName) => {
   console.log(`🔥 ${user.name} says hi❗`)
}
const hiAgain = (user: objWithName) => {
   console.log(`🔥 ${user.name} says hi again❗`)
}

let user = {
   name: 'arima',
   uid: '400'
}
hi(user)
hiAgain(user)