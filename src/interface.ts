// 定义任意的结构或者类型
interface publicPoint {
    x: number | string;
    y: number;
}
interface Point extends publicPoint {
  a?: number
}

interface Point extends publicPoint {
  z: number
}


// 定义函数
interface Func {
    (num1: number, num2: number): number;
}

const myPoint: Point = {
    x: 0,
    y: 1024,
    z: 20
}

const addFunc: Func = (arg1, arg2) => arg1 + arg2;

console.log(myPoint)
console.log(addFunc(20, 30));

// 索引类型
interface Role {
  [id: number]: string;
}

const role: Role = ['super_admin', 'admin']
// console.log(role.length) // length 不存在

const role1: Role = {
   0: 'super_admin',
   1: 'admin',
   5: 'user',
//    a: 'other'
}


// 绕开多余属性检查
interface MyType {
    color: string;
    [prop: string]: any; // 索引类型
}

const getTypes = (myType: MyType) => {
    return `${myType.color}`
}

// 类型断言
getTypes({
  color: 'red',
  type: 'color',
  num: 0
} as MyType)

// 索引签名
getTypes({
    color: 'red',
    type: 'color',
    num: 0,
    num1: [],
    a: () => {},
    b: {},
    c: '123123'
})


interface MyType2 {
    color: string;
}

const getTypes2 = ({ color }: MyType2) => {
    return `${color}`
}

// 类型兼容 - 不推荐
const option = { color: 'yello', size: 12}
getTypes2(option)