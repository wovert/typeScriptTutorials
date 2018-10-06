"use strict";
function fun2(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '大胸'; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var r = fun2();
console.log(r); // 找到了18岁大胸的小姐姐
