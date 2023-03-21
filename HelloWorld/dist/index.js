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
        console.log('naver type');
    }
}
abc("abc");
abc(12);
abc(true);
