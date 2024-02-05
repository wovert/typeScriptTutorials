"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    static print() {
        console.log('Animal static method');
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getInfo() {
        return `我的信息时：${this.name}`;
    }
}
exports.Animal = Animal;
const p = new Animal('wovert');
console.log(p.getName());
p.setName('lingyima');
console.log(p.getName());
