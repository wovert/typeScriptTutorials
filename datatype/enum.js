"use strict";
var STATUS;
(function (STATUS) {
    STATUS[STATUS["success"] = 200] = "success";
    STATUS[STATUS["error"] = 1] = "error";
})(STATUS || (STATUS = {}));
var f = STATUS.error;
console.log(f);
