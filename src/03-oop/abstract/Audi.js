"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarFile = require("./Car");
class Audi extends CarFile.Car {
    constructor(name) {
        super(name);
    }
    drive() {
        console.log(this.name + 'drive Audi');
    }
}
const c = new Audi('奥迪');
c.drive();
