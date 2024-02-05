"use strict";
function printName(name) {
    if (name.lastName) {
        return name.firstName + name.lastName;
    }
    else {
        return name.firstName;
    }
}
const res = printName({
    firstName: '张',
    // lastName: '三'
});
console.log(res);
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('success');
            // console.log(config.dataType)
            // console.log(xhr.responseText)
            if (config.dataType === 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    data: 'name=zhansan',
    url: 'http://api.haoshan.com/v1/channel/news/category',
    dataType: 'json'
});
let md5 = function (key, value) {
    return key + value;
};
let shal1 = function (key, value) {
    return key + '-----' + value;
};
md5('name', 'zhansan');
// 2. 可索引接口：数组、对象的约束
let nums = [11, 22];
let names = ['11', '22'];
let arr = ['aaa', 'bbb'];
console.log(arr);
let objs = { name: '张三', age: '18', 10: 'abc' };
console.log(objs);
class Dog {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + '吃零食');
    }
}
let d = new Dog('wovert');
console.log(d);
d.eat();
