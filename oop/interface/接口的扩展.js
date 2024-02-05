"use strict";
// 接口可以继承接口
class Programmer {
    constructor(name) {
        this.name = name;
    }
    coding(code) {
        console.log(this.name + code);
    }
}
class Web extends Programmer {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(this.name + '喜欢吃馒头');
    }
    work() {
        console.log(this.name + '正在工作');
    }
}
const w = new Web('wovert');
w.eat();
w.work();
w.coding('ts coding');
