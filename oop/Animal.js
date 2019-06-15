"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.print = function () {
        console.log('Animal static method');
    };
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getInfo = function () {
        return "\u6211\u7684\u4FE1\u606F\u65F6\uFF1A" + this.name;
    };
    return Animal;
}());
exports.Animal = Animal;
var p = new Animal('wovert');
console.log(p.getName());
p.setName('lingyima');
console.log(p.getName());
