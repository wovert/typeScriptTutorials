// 基础类型：boolean, number, string, symbol, null and undefined
// 引用类型：object, Array, function, class

const msg: string = 'hello ts!!!'

let msg1: any = '123'
msg1 = 323

const msgStr = `${msg} ${msg1}`
console.log(msg1)
console.log(msg)

const bool: boolean = true
const obj: object = {}
const obj2: {} = {}

const obj3: {msg:string, num: number} = { msg: 'hello', num: 30 }
const obj4: {msg:string, num?: number} = { msg: 'hello' } // ? 可选属性

obj4.num = 0
obj4.num = 23

const arr0: [] = [];

// 自变量
const arr1: string[] = ['hello']
const arr2: (string|number)[] = ['hello', 30]

// 构造函数
const arr4: Array<string> = ['123', '233']
const arr5: Array<string | number> = ['hello', 2323, 29, 'apple']

function testVoid():void {
    console.log('void function...')
  }
  
  function add(a:number, b:number):number {
    return a + b
  }
  
  const color:string = 'rgba(55,51,116,1)'
  
  testVoid()
  console.log(add(10, 20))

