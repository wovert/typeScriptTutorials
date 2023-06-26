"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 类型注解
let str = "abc";
// str = 3;
let arr = "def";
// arr.forEach(() => {})
let cust = {
    name: "zhangsan",
    degree: "guardcard",
    phoen: '10202'
};
let stuObj = {
    name: "wangwu",
    age: 18
};
let stuObj2 = {
    name: "wangwu",
    age: 18
};
console.log(stuObj2.name);
console.log(stuObj.name);
function abc(values) {
    if (typeof values === 'string') {
        console.log("string");
    }
    else if (typeof values === 'number') {
        console.log('nubmer');
    }
    else {
        console.log(values); // never datatype
        console.log('naver type');
    }
}
abc("abc");
abc(12);
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
const symid = Symbol("productpro");
const pro = {
    name: "SUMSNG",
    price: 1000,
    account: 20000,
    [symid]: 23323,
    desc: "description",
    [Symbol("stockno")]: 10000,
    100: true,
    true: false,
};
console.log(pro);
const a = "helo";
