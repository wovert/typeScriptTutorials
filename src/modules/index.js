"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 操作用户表：定义一个Users类和数据表做映射
var User_1 = require("../model/User");
var Article_1 = require("../model/Article");
var u = new User_1.User();
u.username = 'wovert';
u.password = '123456';
User_1.UserModel.add(u);
var a = new Article_1.Article({
    title: '标题',
    desc: '描述'
});
var d = Article_1.ArticleModel.get(1);
console.log(d);
