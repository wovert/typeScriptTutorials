// tuple: 固定类型 + 长度的数组

let tu:[number, string] = [123, 'hello world']
console.log(tu)

// enum
enum STATUS {success=200, error=1}
let f:STATUS = STATUS.error
console.log(f)