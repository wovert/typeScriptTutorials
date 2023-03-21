// 类型注解
let str:string = "abc";
// str = 3;

let arr:string = "def";
// arr.forEach(() => {})

let cust = {
  name: "zhangsan",
  degree: "guardcard",
  phoen: '10202'
}

interface Student {
  name:string,
  age:number
}

let stuObj = {
  name: "wangwu",
  age: 18
}
let stuObj2:Student = {
  name: "wangwu",
  age: 18
}

console.log(stuObj2.name)
console.log(stuObj.name)

type DataFlow = string | number

function abc(values: DataFlow) {
  if (typeof values === 'string') {
    console.log("string")
  } else if (typeof values === 'number') {
    console.log('nubmer')
  } else {
    console.log(values) // never datatype
    console.log('naver type')
  }
}

abc("abc")
abc(12)

// class Student {
//   fullName: string
//   constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//       this.fullName = firstName + " " + middleInitial + " " + lastName
//   }
// }

// interface Person {
//   firstName: string
//   lastName: string
// }

// function greeter(person : Person) {
//   return "Hello, " + person.firstName + " " + person.lastName
// }

// let user:Student = new Student("Jane", "M.", "User")

// document.body.innerHTML = greeter(user)



// 上面的所有声明在当前文件作用域
export {}