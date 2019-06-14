"use strict";
var n;
var ud;
// console.log(n) // 报错
console.log(ud);
var val;
// val = 123
console.log(val);
var empty;
empty = null;
console.log(empty);
var neverVal;
// neverVal = 123 // 错误
neverVal = (function () {
    throw new Error('错误');
})();
