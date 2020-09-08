class MyNode<T> {

   constructor(
      public data: T,
      public next: MyNode<T> | null = null
   ) { }
}

const nodeA = new MyNode<string>('foo')
const nodeB = new MyNode<number>(1)