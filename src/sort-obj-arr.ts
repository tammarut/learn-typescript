let obj: any[] = [
  {
    title: "a",
    done: true
  },
  {
    title: "b",
    done: false
  },

  {
    title: "c",
    done: true
  },
  {
    title: "c",
    done: false
  }
];

console.log("🔴Before:", obj);
obj.sort((a,b) =>{

return a.done-b.done
} )

console.log("🟢After:", obj);
