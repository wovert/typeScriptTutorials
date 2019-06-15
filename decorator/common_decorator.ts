/**
 * @param  {any} params 装饰的当前类
 */// 装饰器
function logClass(params:any) {
  console.log(params)
  params.prototype.apiUrl = '动态扩展的属性'
  params.prototype.run = function () {
    console.log('我是一个run 方法')
  }
}

@logClass
class HttpClient {
  constructor() {
  }

  getData() {
  }
}

const http:any = new HttpClient()
console.log(http.apiUrl)
http.run()