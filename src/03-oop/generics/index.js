"use strict";
// 泛型函数
function getData(value) {
    return value;
}
console.log(getData(123));
console.log(getData('hello'));
// 泛型类
class MinClass {
    constructor() {
        this.list = [];
    }
    add(num) {
        this.list.push(num);
    }
    min() {
        let minVal = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minVal > this.list[i]) {
                minVal = this.list[i];
            }
        }
        return minVal;
    }
}
const m = new MinClass();
m.add(2);
m.add(12);
m.add(12);
m.add(32);
console.log('最小值：' + m.min());
class MaxClass {
    constructor() {
        this.list = [];
    }
    add(num) {
        this.list.push(num);
    }
    max() {
        let maxVal = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (maxVal < this.list[i]) {
                maxVal = this.list[i];
            }
        }
        return maxVal;
    }
}
const m2 = new MaxClass(); // 实例化类，指定累的T代表的类型number
m2.add(2);
m2.add(12);
m2.add(12);
m2.add(32);
console.log('最大值：' + m2.max());
const m3 = new MaxClass(); // 实例化类，指定累的T代表的类型number
m3.add('A');
m3.add('C');
m3.add('D');
m3.add('E');
console.log('最大值：' + m3.max());
let setData = function (val1, val2) {
    return val1 + val2;
};
setData('name', '张三');
let setData2 = function (value) {
    return value;
};
setData2('张三');
setData2(123);
function getData2(value) {
    return value;
}
let myGetData = getData2;
myGetData('20');
// myGetData(20) // error
////////////////////////////////////////////////////////////////////
// 把类作为参数来约束数据传入的类型
class User {
}
class Article {
    constructor(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}
class MySQL {
    add(info) {
        console.log(info);
        return true;
    }
    updated(info, id) {
        console.log(info);
        console.log(id);
        return true;
    }
}
const a = new Article({
    title: '实例化标题',
    desc: '实例化描述',
    status: 0
});
// a.title = '标题'
// a.desc = '描述'
// a.status = 1
let db = new MySQL();
db.add(a);
const u = new User();
u.username = 'wovert';
u.password = '123123';
let db2 = new MySQL();
db2.add(u);
