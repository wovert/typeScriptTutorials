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