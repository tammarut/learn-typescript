type Person = {name: string; age: number; location: string}

function proxy(object: any, key: any) {
  return new Proxy(object, {
    get(target, prop, receiver) {
      if (prop === key) {
        console.log('getting', key, target[prop])
      }
      return Reflect.get(target, prop, receiver)
    },

    set(target, prop, value, receiver) {
      if (prop === key) {
        console.log('getting', key, target[prop])
      }
      return Reflect.set(target, prop, value, receiver)
    },
  })
}

function logAccess<T>(object: T, key: keyof T): T {
  return proxy(object, key)
}
const john: Person = {
  name: 'John',
  age: 20,
  location: 'Thailand',
}

logAccess(john, 'age')
logAccess({id: 1, title: 'Harry'}, 'id')
john.age += 1
