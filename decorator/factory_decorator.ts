/**
 * @param  {string} params 接口hello
 */
function logClass2(params:string) {
  return function (target:any) { // target 接口httpClient2对象
    // console.log(target)
    console.log('类装饰器：', params)
    target.prototype.apiUrl = params
    target.prototype.run = function() {
      console.log('run method is ...'+ this.apiUrl)
    }
  }
}

function plugin(target:any) {
  console.log(target)
  return class extends target {
    apiUrl:any = '我是修改后的数据'
    getData():void {
      console.log('重载getData:', this.apiUrl)
    }
  }
}
function logProperty(params:any) {
  return function(target:any, attr:any) {
    console.log('属性装饰器：', params)
    console.log('属性装饰器 target:', target)
    console.log('属性装饰器 attr:', attr)
    target.attr = params
  }
}

function methodProperty(params:any) {
  return function(target:any, methodName:any, desc:any) {
    console.log('方法装饰器：', params)
    console.log('方法装饰器 target:', methodName)
    console.log('方法装饰器 desc:', desc)

    let method = desc.value
    desc.value = function(...args:any[]) {
      args = args.map((value) => {
        return String(value)
      })
      console.log(args)
      method.apply(this, args)
    }

  }
}

function logParams(params:any) {
  return function (target:any, paramsName:any, paramsIndex:any) {
    console.log(params)
    console.log(target)
    console.log(paramsName)
    console.log(paramsIndex)
    target.apiUrl = params
  }
}

// @plugin
// @logClass2('http://www.api.com/v1')
class HttpClient2 {
  // @logProperty('http://www.wovert.com')
  public apiUrl:string | undefined
  constructor() {
    this.apiUrl = '我是构造函数里的apiUrl'
  }

  // @methodProperty('执行方法装饰器')
  getData(...args:any[]):void {
    console.log(args)
    console.log('我是getData方法')
  }

  getParams(@logParams('xxxx') uuid:any):void {
    console.log('方法参数装饰器')
  }
}

const http2:any = new HttpClient2()
// http2.apiUrl = '修改apiUrl'
// console.log(http2.apiUrl)
// http2.run()
// http2.getData(123, 'hello')
http2.getParams(123)
console.log(http2.apiUrl)
