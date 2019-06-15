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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @param  {string} params 接口hello
 */
function logClass2(params) {
    return function (target) {
        // console.log(target)
        console.log('类装饰器：', params);
        target.prototype.apiUrl = params;
        target.prototype.run = function () {
            console.log('run method is ...' + this.apiUrl);
        };
    };
}
function plugin(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = '我是修改后的数据';
            return _this;
        }
        class_1.prototype.getData = function () {
            console.log('重载getData:', this.apiUrl);
        };
        return class_1;
    }(target));
}
function logProperty(params) {
    return function (target, attr) {
        console.log('属性装饰器：', params);
        console.log('属性装饰器 target:', target);
        console.log('属性装饰器 attr:', attr);
        target.attr = params;
    };
}
function methodProperty(params) {
    return function (target, methodName, desc) {
        console.log('方法装饰器：', params);
        console.log('方法装饰器 target:', methodName);
        console.log('方法装饰器 desc:', desc);
        var method = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args);
            method.apply(this, args);
        };
    };
}
function logParams(params) {
    return function (target, paramsName, paramsIndex) {
        console.log(params);
        console.log(target);
        console.log(paramsName);
        console.log(paramsIndex);
        target.apiUrl = params;
    };
}
// @plugin
// @logClass2('http://www.api.com/v1')
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
        this.apiUrl = '我是构造函数里的apiUrl';
    }
    // @methodProperty('执行方法装饰器')
    HttpClient2.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log('我是getData方法');
    };
    HttpClient2.prototype.getParams = function (uuid) {
        console.log('方法参数装饰器');
    };
    __decorate([
        __param(0, logParams('xxxx'))
    ], HttpClient2.prototype, "getParams", null);
    return HttpClient2;
}());
var http2 = new HttpClient2();
// http2.apiUrl = '修改apiUrl'
// console.log(http2.apiUrl)
// http2.run()
// http2.getData(123, 'hello')
http2.getParams(123);
console.log(http2.apiUrl);
