"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnimalFile = require("./Animal");
class Person extends AnimalFile.Animal {
    constructor(name, age) {
        super(name); // 初始化父类构造函数
        this.age = age;
    }
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    getInfo() {
        return `我的信息时：${this.name}--${this.age}`;
    }
}
const p = new Person('wovert', 18);
console.log(p.getAge());
p.setAge(20);
console.log(p.getAge());
console.log(p.getName());
p.setName('lingyima');
console.log(p.getName());
console.log(p.getInfo());
Person.print();
