"use strict";
var HUMAN;
(function (HUMAN) {
    HUMAN[HUMAN["MALE"] = 0] = "MALE";
    HUMAN[HUMAN["FEMALE"] = 1] = "FEMALE";
    HUMAN[HUMAN["YAO"] = 2] = "YAO";
})(HUMAN || (HUMAN = {}));
console.log(HUMAN.FEMALE); // 1
var WEEKDAY;
(function (WEEKDAY) {
    WEEKDAY["MON"] = "\u661F\u671F\u4E00";
    WEEKDAY["THU"] = "\u661F\u671F\u4E8C";
    WEEKDAY["THu"] = "\u661F\u671F\u4E09";
})(WEEKDAY || (WEEKDAY = {}));
console.log(WEEKDAY.THU); // 星期二
