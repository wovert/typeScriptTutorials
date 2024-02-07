// 泛型函数
function getData<T>(value:T):T {
  return value
}

console.log(getData<number>(123))
console.log(getData<string>('hello'))

// 泛型类
class MinClass<T> {
  public list:number[] = []
  add(num:number):void {
    this.list.push(num)
  }
  min():number {
    let minVal = this.list[0]
    for(let i = 0; i < this.list.length; i++) {
      if (minVal > this.list[i]) {
        minVal = this.list[i]
      }
    }
    return minVal
  }
}

const m = new MinClass()
m.add(2)
m.add(12)
m.add(12)
m.add(32)
console.log('最小值：' + m.min())

class MaxClass<T> {
  public list:T[] = []
  add(num:T):void {
    this.list.push(num)
  }
  max():T {
    let maxVal = this.list[0]
    for(let i = 0; i < this.list.length; i++) {
      if (maxVal < this.list[i]) {
        maxVal = this.list[i]
      }
    }
    return maxVal
  }
}

const m2 = new MaxClass<number>() // 实例化类，指定累的T代表的类型number
m2.add(2)
m2.add(12)
m2.add(12)
m2.add(32)
console.log('最大值：' + m2.max())

const m3 = new MaxClass<string>() // 实例化类，指定累的T代表的类型number
m3.add('A')
m3.add('C')
m3.add('D')
m3.add('E')
console.log('最大值：' + m3.max())


//////////////////////////////////

interface ConfigFn {
  (val1:string, val2:string):string
}
let setData:ConfigFn = function(val1:string, val2:string):string {
  return val1 + val2
}
setData('name', '张三')


// 泛型接口1
interface ConfigFn2 {
  <T>(value:T):T
}


let setData2:ConfigFn2 = function<T>(value:T):T {
  return value
}

setData2<string>('张三')
setData2<number>(123)

// 泛型接口2
interface ConfigFn3<T> {
  (value:T):T
}
function getData2<T>(value:T):T {
  return value
}

let myGetData:ConfigFn3<string> = getData2
myGetData('20')
// myGetData(20) // error

////////////////////////////////////////////////////////////////////


// 把类作为参数来约束数据传入的类型

class User {
  username:string | undefined
  password:string | undefined
}

class Article {
  title:string | undefined
  desc:string | undefined
  status:number | undefined
  constructor (params: {
    title: string | undefined,
    desc: string | undefined,
    status?:number | undefined
  }) {
    this.title = params.title
    this.desc = params.desc
    this.status = params.status
  }
}

class MySQL<T> {
  add(info:T):boolean {
    console.log(info)
    return true
  }
  updated(info:T, id:number):boolean {
    console.log(info)
    console.log(id)
    return true
  }
}

const a = new Article({
  title: '实例化标题',
  desc: '实例化描述',
  status: 0
})
// a.title = '标题'
// a.desc = '描述'
// a.status = 1

let db = new MySQL<Article>()
db.add(a)

const u = new User()
u.username = 'wovert'
u.password = '123123'

let db2 = new MySQL<User>()
db2.add(u)

