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
// console.log(getInfo(true))