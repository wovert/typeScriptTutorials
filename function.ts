/**
 * @param  {string} name
 * @param  {number} age? 可选参数(必须在参数的最后位置)
 * @param  {string='BJ'} city 默认参数
 * @returns string join all params
 */
function func3(name:string, age?:number, city:string='BJ'):string {
  return age ? `${name}--${age} -- ${city}` : `${name} -- ${city}`
}
  
console.log(func3('wovert', 10))
console.log(func3('lingyima'))

// 声明函数
function func1(): void {
console.log('func1 function is running...')  
}
  
// 匿名函数
let func2 = function():number {
  console.log('func2 function is running...')  
  return 100
}

func1()
func2()

const add0 = (arg1: number, args2: number): number => {
  return arg1 + args2;
}

// 匿名函数
// const fn = funtion(){} ——> const fn = () => {}
const add1: (arg1: number, args2: number) => number = (arg1: number, arg2: number) => arg1 + arg2

console.log(add0(10, 20));
console.log(add1(10, 20));

  // 函数重载
function getInfo(name:string):string
function getInfo(age:number):number
function getInfo(name:string, age:number):number

function getInfo(str:any, str2?:any):any {
  if (typeof str === 'string' && !str2) {
    return 'My name is ' + str
  } else if (typeof str === 'number' && !str2) {
    return 'My old is ' + str
  } else {
    return `My name is ${str} and old is ${str2}`
  }
}

console.log(getInfo('wovert'))
console.log(getInfo(18))
console.log(getInfo('wovert', 18))
// console.log(getInfo(true)) // 类型 boolean不嫩赋值给number or string

/**
 * @param  {number[]} ...result
 * @returns number
 */
function func4(...result:number[]):number {
    const res:number = result.reduce((total:number, val:number) => {
        return total + val
    }, 0)
    return res
}

// 三点运算符
const price:Array<number> = [10, 20, 30, 40]
console.log(func4(...price))

// void 没有类型
// never 永远不存在的值或者类型
// unknown 未知的类型

let a1: any
a1 = 123
a1 = '123'
a1 = () => {}

let b:void
// b = 123
// b = 'unknown'
b = undefined
// b = void
// b = null

let c:unknown
c = 123
c = 'hi'
c = undefined
c = null

typeof a1 === 'number' && a1.toFixed(2)
a1 instanceof Array && a1.join('_')

if (typeof c === 'number') {
    c.toFixed(2)
} else if(typeof c === 'object' && c instanceof Array) {
    c.join('_')
}

var n:number
var ud:undefined
// console.log(n) // 报错
console.log(ud)

var val:number | undefined
// val = 123
console.log(val)

var empty:number | null | undefined
empty = null
console.log(empty)

var neverVal:never
// neverVal = 123 // 错误
neverVal = (() => {
  throw new Error('错误')
})()