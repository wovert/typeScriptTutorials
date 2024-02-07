interface FullName {
  firstName:string
  lastName?:string
}

function printName(name:FullName) {
  if (name.lastName) {
    return name.firstName + name.lastName
  } else {
    return name.firstName
  }
}

const res:string = printName({
  firstName: '张',
  // lastName: '三'
})
console.log(res)

//////////////////////////////////////////////////////////////

interface Config {
  type:string
  url:string
  data?:string
  dataType:string
}

function ajax(config:Config) {
  var xhr = new XMLHttpRequest()
  xhr.open(config.type, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log('success')
      // console.log(config.dataType)
      // console.log(xhr.responseText)
      if (config.dataType === 'json') {
        console.log(JSON.parse(xhr.responseText))
      } else {
        console.log(xhr.responseText)
      }
    }
  }
}
ajax({
  type:'get',
  data: 'name=zhansan',
  url: 'http://api.haoshan.com/v1/channel/news/category',
  dataType: 'json'
})


//////////////////////////////////////////////////////////////

// 函数类型接口

// 1. 加密的函数类型接口

interface encrypt {
  (key:string, value:string):string
}

let md5:encrypt = function(key:string, value:string):string {
  return key + value
}

let shal1:encrypt = function(key:string, value:string):string {
  return key + '-----' + value
}

md5('name', 'zhansan')

// 2. 可索引接口：数组、对象的约束

let nums:number[] = [11, 22]
let names:Array<string> = ['11','22']

// 可索引接口：数组的约束
interface UserArr {
  [index:number]:string
}

let arr:UserArr = ['aaa','bbb']
console.log(arr)

interface UserObj {
  [index:string]:string
}

let objs:UserObj = {name:'张三', age: '18', 10:'abc'}
console.log(objs)

// 类类型接口：对类的约束

interface Animal {
  name:string
  eat():void
}

class Dog implements Animal {
  name:string

  constructor(name:string) {
    this.name = name
  }

  eat():void {
    console.log(this.name + '吃零食')
  }
}

let d = new Dog('wovert')
console.log(d)
d.eat()