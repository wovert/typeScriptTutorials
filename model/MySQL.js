"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义mysql数据库类
var MySQL = /** @class */ (function () {
    function MySQL() {
    }
    MySQL.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MySQL.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySQL.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySQL.prototype.get = function (id) {
        var list = [
            {
                title: 'xxxxx',
                desc: 'xxxx'
            },
            {
                title: 'xxxxx',
                desc: 'xxxx'
            }
        ];
        return list;
    };
    return MySQL;
}());
exports.MySQL = MySQL;
