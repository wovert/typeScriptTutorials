/******************************************* 类型注解 ***********************************/
{
  let str:string = "abc";
  // str = 3; // error 类型不匹配
}


/******************************************* 类型推导 ***********************************/
{

  let arr = [1, 2, 3, 4, 5] //  number[] type
  console.log(arr)
  
  let cust = {
    name: "张三",
    age: 18,
    degree: "guardcard",
    phone: '10202'
  }
  
  // 定义接口
  interface Student {
    name: string,
    age: number
  }
  
  let stuObj = {
    name: "上帝",
    age: 18
  }
  let stuObj2:Student = {
    name: "老天",
    age: 18
  }
  stuObj2 = cust;
  
  console.log(stuObj2.name)
  // console.log(stuObj.phone) // 不能访问，因为 Student类型没有 phone属性
  
  // 自动提示清晰明确
  console.log(cust.name)
  console.log('age=', cust.age)}


/******************************************* object类型 ***********************************/
let obj: object = {age: 23};


/******************************************* 联合类型 ***********************************/
{
  type DataFlow = string | number
  function checkDataType(values: DataFlow) {
    if (typeof values === 'string') {
      console.log("string")
    } else if (typeof values === 'number') {
      console.log('nubmer')
    } else {
      console.log(values) // never datatype
      console.log('naver type')
    }
  }
  
  checkDataType("abc")
  checkDataType(12)
}


/**************************** 根类型（除了null和undefined的 任何类型）***********************/
{
  let root: {} = 10
  let root1: {} = 'hello'
  let root2: {} = {name: 'Alice', age:18}
}


/**************************** 交叉类型，类似 object类型 ***********************/
{
  type Obj1 = {username: string}
  type Obj2 = {age: number}
  let crossVar: Obj1 & Obj2 = {username: 'Alice', age: 18}
  
  // let crossVar: { username:string } = {username: 'hello'}
  // let crossVar1: { age: number } = {age: 18}
  
  
  type MyType = number | string
  let myVar: MyType = 'My Value'
  type num = number
  let myVal:num = 20
}


/**************************** 字面量数据类型 ***********************/
{
  type t = 1 | 2 | 3
  // let t1: t = 4 // error, value is only contain 1, 2, 3
  
  type increaseFlag = 0 | 1
  function isStartUp(increase: increaseFlag) {
    if (increase) {
      console.log('open')
    } else {
      console.log('close')
    }
  }
  
  isStartUp(1) // ok
  // isStartUp(3) // error
}


/**************************** never类型 ***********************/
// 通过注释不接受的函数参数施加限制
function fn(input: never) {}
declare let myNever: never
declare let myAny: any;
// it only accepts `never`
// fn(myNever); // ✅

// passing anything else (or nothing) causes a type error
// fn(); // ❌  An argument for 'input' was not provided.
// fn(1); // ❌ Argument of type 'number' is not assignable to parameter of type 'never'.
// fn('foo'); // ❌ Argument of type 'string' is not assignable to parameter of type 'never'.

// cannot even pass `any`

// fn(myAny); // ❌ Argument of type 'any' is not assignable to parameter of type 'never'.

{
  type DataFlow = string | number
  function dataFlowAnalysisWithNever(dataFlow: DataFlow) {
    if (typeof dataFlow === 'string') {
      console.log('string datatype=', dataFlow.length)
    } else if (typeof dataFlow === 'number') {
      console.log('number datatype=', dataFlow.toFixed(2))
    } else {
      console.log(typeof dataFlow)
      let data = dataFlow
    }
  }
  dataFlowAnalysisWithNever('免税店')
  dataFlowAnalysisWithNever(3.1415926)
  // dataFlowAnalysisWithNever(true)

  // never 会从联合类型中移除，类似于将零和其他数字相加时结果等于该数字。
  type Res1 = never | string // string
  // never 会覆盖交叉类型中的其他类型，类似于零乘其他数字时结果等于零。
  type Res2 = never & string // never
}

/**************************** 枚举类型 ***********************/
{

  const Status = {
    MANAGER_ADUIT_FAIL: -1,
    NO_ADUIT: 0,
    MANAGER_ADUIT_SUCCESS: 1,
    FINAL_ADUIT_SUCCESS: 2,
  }

  enum Aduit {
    MANAGER_ADUIT_FAIL = -1,
    NO_ADUIT, // 自动递增+1
    MANAGER_ADUIT_SUCCESS,
    FINAL_ADUIT_SUCCESS
  }

  // 审核类
  class MyAduit {
    getAduitStatus(status: number):void {
      switch(status) {
        case Status.NO_ADUIT:
          console.log('没有审核')
          break
        case Status.MANAGER_ADUIT_SUCCESS:
          console.log('经历审核通过')
          break
        case Status.FINAL_ADUIT_SUCCESS:
          console.log('财务审核通过')
          break
      }
    }
    getAduitStatusByEnum(aduit: Aduit):void {
      switch(aduit) {
        case Aduit.NO_ADUIT:
          console.log('没有审核')
          break
        case Aduit.MANAGER_ADUIT_SUCCESS:
          console.log('经历审核通过')
          break
        case Aduit.FINAL_ADUIT_SUCCESS:
          console.log('财务审核通过')
          break
      }
    }
  }
  const aduit:MyAduit = new MyAduit()
  aduit.getAduitStatus(Status.FINAL_ADUIT_SUCCESS) // 不推荐
  aduit.getAduitStatusByEnum(Aduit.FINAL_ADUIT_SUCCESS) // 推荐
  aduit.getAduitStatusByEnum(Aduit['MANAGER_ADUIT_SUCCESS']) // 推荐
}


/**************************** any/unknown ***********************/
{
  // const Ref: any = {}
  // function isRef(r: any): r is Ref {
  //   return Boolean(r && r.__v_isRef === true) // any类型的 r 参数在函数内部获取属性
  // }
  // any可以是父类
  let num:Array<string> = ['ab','cd']
  let data:any = undefined

  // any可以是子类
  let aa:any = ["abc", "cde"]
  let n: number = aa

  // any可以获取属性
  let obj = {name:'alice',age:18}
  let bb:any = obj
  console.log(bb.name)

  // any 前端请求后端，获取数据
  class Books{}
  let book:Books[] = aa

  // unknown 不可以获取属性
  let obj2 = {name:'alice',age:18}
  let bb2:unknown = obj
  // console.log(bb2.name) // error

  // unknown不可以是子类
  let ua: unknown = "abc"
  // let uaa: number = ua // error
  // console.log(uaa)
}

/**************************** 接口 ***********************/
{
  interface Product {
    name: string
    price: number
    account: number
    buy():void
  }

  let p:Product = {
    name: 'iPhone',
    price: 100,
    account: 10,
    buy() {
      console.log('buy ', this.name)
    }
  }

  // 宠物
  interface Pet {
    name: string,
    love: number,
    health: number,
    toHealth():void
  }

  // 1. 接口：可以继承, type 不可以继承
  interface Dog extends Pet {
    strain: string,
    guradHome():void
  }
  
  function getPet(p: Pet) {
    console.log('pet=', p)
  }
  const d:Dog = {
    name: '八哥',
    love: 30009,
    health: 100,
    strain: 'good',
    toHealth(): void {
      console.log('toHealth=' + this.health)
    },
    guradHome():void {
      console.log('guradHome')
    }
  }
  getPet(d)
  d.toHealth()
  d.guradHome()

  interface List {
    add():void,
    remove():void
  }

  class ArrayList implements List {
    add(): void {
      throw new Error("Method not implemented.");
    }
    remove(): void {
      throw new Error("Method not implemented.");
    }

  }

  class LinkedList implements List {
    add(): void {
      throw new Error("Method not implemented.");
    }
    remove(): void {
      throw new Error("Method not implemented.");
    }
  }

  interface Product2 {
    name: string
    price: number
    account: number
    [x:string]: any   // 可索引签名 [x:number]
    buy():void
  }

  interface Product3 {
    name: string
    price: number
    account: number
    [x:number]: any   // 可索引签名
    buy():void
  }

  interface Product4 {
    name: string
    price: number
    account: number
    [x:symbol]: any   // 可索引签名
    buy():void
  }

  let p2:Product2 = {
    name: 'iPhone',
    price: 100,
    account: 10,
    desc: 'descrition',
    title: 'add title',
    100: '10k',
    [Symbol("stockno")]: 1000,
    buy() {
      console.log('buy ', this.name)
    }
  }
  console.log('p2=', p2)


  let p3:Product3 = {
    name: 'iPhone',
    price: 100,
    account: 10,
    // desc: 'descrition', // error
    100: '10k', // ok
    [Symbol("stockno")]: 1000,
    buy() {
      console.log('buy ', this.name)
    }
  }
  console.log('p3=', p3)

  let p4:Product4 = {
    name: 'iPhone',
    price: 100,
    account: 10,
    // desc: 'descrition', // error
    // 100: '10k', // error
    [Symbol("stockno")]: 1000, // ok
    buy() {
      console.log('buy ', this.name)
    }
  }
  console.log('p3=', p3)

  // class Student {
  //   fullName: string
  //   constructor(public firstName: string, public middleInitial: string, public lastName: string) {
  //       this.fullName = firstName + " " + middleInitial + " " + lastName
  //   }
  // }

  // function greeter(person : Person) {
  //   return "Hello, " + person.firstName + " " + person.lastName
  // }

  // let user:Student = new Student("Jane", "M.", "User")

}

/****************************  索引访问类型 ***********************/
{
  const symid = Symbol('productno')
  interface Product {
    name: string
    price: number
    account: number
    [symid]: number | string
    buy():string
  }

  // string
  type A = Product['name']
  // () => string
  type B = Product['buy']

  // string | number
  type C = Product['name' | 'price']
  
  // string | number
  type S = Product[typeof symid]

  type Pkeys = keyof Product // "name" | "price" | "account" | "buy" | typeof symid="" ...
  let pKeys:Pkeys = "account"
  let pKeys2:"name" | "price" | "account" | "buy" | typeof symid = symid


  // 泛型
  type AllKeys<T> = T extends any? T: never
  type Pkeys3 = AllKeys<keyof Product>
}

/****************************  null/undefined ***********************/
{
  let str:string | undefined = undefined
  console.log('str:', str)

  // ?=可选
  function func(data?: string) {
    if (data) data.toString()
    // data!.toString()
  }
  func()
  func('hello')


  // any, unknown, undefined 可以接受 undefined
  // any, unknown, null 可以接受 null
  let d: unknown = undefined
  let n: unknown = null
}

/****************************  null/undefined ***********************/
{
  let obj = {username: 'Alice', age:10}
  let obj2:object = {username: 'Alice', age:10}
  // let username = 'lisi' // eror
  const username = 'username' // ok
  let u = obj[username]
  // let aa = obj2[username] // error obj2 只能使用属性的数据类型获取数据
  console.log(u)
}


// 上面的所有声明在当前文件作用域
export {}