"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MsSQL = /** @class */ (function () {
    function MsSQL() {
    }
    MsSQL.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MsSQL.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSQL.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSQL.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MsSQL;
}());
exports.MsSQL = MsSQL;
