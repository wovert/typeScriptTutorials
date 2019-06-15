"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalFile = require("./Animal");
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        var _this = _super.call(this, name) // 初始化父类构造函数
         || this;
        _this.age = age;
        return _this;
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getInfo = function () {
        return "\u6211\u7684\u4FE1\u606F\u65F6\uFF1A" + this.name + "--" + this.age;
    };
    return Person;
}(AnimalFile.Animal));
var p = new Person('wovert', 18);
console.log(p.getAge());
p.setAge(20);
console.log(p.getAge());
console.log(p.getName());
p.setName('lingyima');
console.log(p.getName());
console.log(p.getInfo());
Person.print();
