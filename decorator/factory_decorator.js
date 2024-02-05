"use strict";
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
    return class extends target {
        constructor() {
            super(...arguments);
            this.apiUrl = '我是修改后的数据';
        }
        getData() {
            console.log('重载getData:', this.apiUrl);
        }
    };
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
        let method = desc.value;
        desc.value = function (...args) {
            args = args.map((value) => {
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
class HttpClient2 {
    constructor() {
        this.apiUrl = '我是构造函数里的apiUrl';
    }
    // @methodProperty('执行方法装饰器')
    getData(...args) {
        console.log(args);
        console.log('我是getData方法');
    }
    getParams(uuid) {
        console.log('方法参数装饰器');
    }
}
const http2 = new HttpClient2();
// http2.apiUrl = '修改apiUrl'
// console.log(http2.apiUrl)
// http2.run()
// http2.getData(123, 'hello')
http2.getParams(123);
console.log(http2.apiUrl);
