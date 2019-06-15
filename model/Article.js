"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MySQL_1 = require("./MySQL");
// import { MsSQL } from './MsSQL'
var Article = /** @class */ (function () {
    function Article(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return Article;
}());
exports.Article = Article;
exports.ArticleModel = new MySQL_1.MySQL();
