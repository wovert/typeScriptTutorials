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
// 接口可以继承接口
var A;
(function (A) {
    var Programmer = /** @class */ (function () {
        function Programmer(name) {
            this.name = name;
        }
        Programmer.prototype.coding = function (code) {
            console.log(this.name + code);
        };
        return Programmer;
    }());
    var Web = /** @class */ (function (_super) {
        __extends(Web, _super);
        function Web(name) {
            return _super.call(this, name) || this;
        }
        Web.prototype.eat = function () {
            console.log(this.name + '喜欢吃馒头');
        };
        Web.prototype.work = function () {
            console.log(this.name + '正在工作');
        };
        return Web;
    }(Programmer));
    A.Web = Web;
})(A = exports.A || (exports.A = {}));
