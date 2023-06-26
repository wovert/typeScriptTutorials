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
const symid = Symbol("productpro")

// 可索引签名
interface Product {
  name: string,
  price: number,
  account: number,
  [symid]: number,
  [x:string]: any // :number, :symble
}



const pro:Product = {
  name: "SUMSNG",
  price: 1000,
  account: 20000,
  [symid]: 23323,
  desc: "description",
  [Symbol("stockno")]: 10000,
  100: true,
  true: false,
}
console.log(pro)


// 属性值类型: string
type A = Product["name"]
type F = Product['name'|'price']
type B = Product[typeof symid]

type Pkeys = keyof Product // "name"|"price"|“account"|...
let pKyes:Pkeys = "account"
type AllKeys<T> = T extends any ? T: never
type Pkeys2 = AllKeys<keyof Product>

// let stru1:string = undefined; // error
let stru2:string | undefined = undefined;
console.log(stru2)

function fn(data?: string) {
  if (data) data.toString()
  // data!.toString()
}

// any, unknown, undefined 可以接受 undefined
// any, unknown, null 可以接受 null
let duu: unknown = undefined;


const a:A = "helo"




// 上面的所有声明在当前文件作用域
export {}