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
var CarFile = require("./Car");
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(name) {
        return _super.call(this, name) || this;
    }
    Audi.prototype.drive = function () {
        console.log(this.name + 'drive Audi');
    };
    return Audi;
}(CarFile.Car));
var c = new Audi('奥迪');
c.drive();
