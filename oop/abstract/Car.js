"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.getName = function () {
        return this.name;
    };
    return Car;
}());
exports.Car = Car;
