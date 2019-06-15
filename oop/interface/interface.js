"use strict";
function printName(name) {
    if (name.lastName) {
        return name.firstName + name.lastName;
    }
    else {
        return name.firstName;
    }
}
var res = printName({
    firstName: '张',
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
var md5 = function (key, value) {
    return key + value;
};
var shal1 = function (key, value) {
    return key + '-----' + value;
};
md5('name', 'zhansan');
// 2. 可索引接口：数组、对象的约束
var nums = [11, 22];
var names = ['11', '22'];
var arr = ['aaa', 'bbb'];
console.log(arr);
var objs = { name: '张三', age: '18', 10: 'abc' };
console.log(objs);
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃零食');
    };
    return Dog;
}());
var d = new Dog('wovert');
console.log(d);
d.eat();
