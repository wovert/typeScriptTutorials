# TypeScript

> 由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，TypeScript 在 JavaScript 的基础上添加了可选的静态类型和基于类的面向对象编程。
> 其实TypeScript就是相当于JavaScript的增强版，但是最后运行时还要编译成JavaScript。TypeScript最大的目的是让程序员更具创造性，提高生产力，它将极大增强JavaScript编写应用的开发和调试环节，让JavaScript能够方便用于编写大型应用和进行多人协作。

## TypeScript和JavaScript的对比

- TypeScript是一个应用程序级的JavaScript开发语言。（这也表示TypeScript比较牛逼，可以开发大型应用，或者说更适合开发大型应用）

- TypeScript是JavaScript的超集，可以编译成纯JavaScript。这个和我们CSS离的Less或者Sass是很像的，我们用更好的代码编写方式来进行编写，最后还是有好生成原生的JavaScript语言。

- TypeScript跨浏览器、跨操作系统、跨主机、且开源。由于最后他编译成了JavaScript所以只要能运行JS的地方，都可以运行我们写的程序，设置在node.js里。

- TypeScript始于JavaScript，终于JavaScript。遵循JavaScript的语法和语义，所以对于我们前端从业者来说，学习前来得心应手，并没有太大的难度。

- TypeScript可以重用JavaScript代码，调用流行的JavaScript库。

- TypeScript提供了类、模块和接口，更易于构建组件和维护。

## 开发环境的安装

### 1. 安装Node.js

[Node官网下载](https://nodejs.org/en/download/)

``` shell
# node -v
# npm -V
```

### 2. 安装TypeScript包

``` sh
# npm install typescript -g
# tsc --version
```

Mac: `sudo npm install typescript -g`指令进行安装

### 3. 编写 HelloWorld

``` shell
创建项目
# mkdir HelloWorld

初始化项目
# cd HelloWorld
# npm init -y

创建 tsconfig.json文件，是TypeScript项目配置文件，通过读取它来设置 TypeScript 编译器的编译参数
# tsc --init

安装@types/node: 解决模块的声明文件问题
# npm install @types/node --dev-save

编写 HelloWorld.ts 文件
# vim HelloWorld.ts
  var a:string = "HelloWorld"
  console.log(a)

Vscode菜单 -> 终端 -> 运行任务 -> 选择 tsc：构建-tsconfig.json -> 生成一个helloWorld.js文件

# node HelloWorld.js
```

## 变量

> TypeScript 特点是变量是强类型的，在声明变量的时候必须定义一个数据类型；比如：字符串、数字、布尔、没去...

### TypeScript 数据类型

- Undefined
- Number:数值类型
- string : 字符串类型
- Boolean: 布尔类型
- enum：枚举类型
- any : 任意类型，一个牛X的类型
- void：空类型
- Array : 数组类型
- Tuple : 元祖类型
- Null ：空类型
- Never: never类型

### Undefined 类型

> 定义了一个变量，但没有给他赋予任何值的时候，他就是Undefined类型

### Number 类型

> 所有的数字都是Number类型，这不分是整数还是小数

#### 在TypeScrip中有几种特殊的Number类型

- `NaN`：它是Not a Number 的简写，意思就是不是一个数值。如果一个计算结果或者函数的返回值本应该是数值，但是由于种种原因，他不是数字。出现这种状况不会报错，而是把它的结果看成了NaN。
- `Infinity` :正无穷大
- `-Infinity`：负无穷大

### string 类型

> 由单引号或者双引号括起来的一串字符就是字符串

### boolean 类型

> boolean类型只有两种值，true和false

### enum 类型

> 很多值是多个并且是固定的

### any类型

> 任何数据类型

### never 类型

> 是其他类型(null/undefined)的子类型，代表从不会出现的值

## 函数

### ![定义函数](./function/define_function.js)

- 声明（定义）函数必须加 function 关键字；
- 函数名与变量名一样，命名规则按照标识符规则；
- 函数参数可有可无，多个参数之间用逗号隔开；
- 每个参数参数由名字与类型组成，之间用分号隔开；
- 函数的返回值可有可无，没有时，返回类型为 void；
- 大括号中是函数体。

### 形参的使用

> 函数定义的时候写的参数是形参。从字面意义上我们可以看出，形参就是形式上的参数。我们定义了形参也就规定了此函数的参数个数和参数类型，规范了函数。

### 实参的使用

> 在函数调用的时候，我们需要按照形参的规则传递实参，有几个形参就要传递几个实参，并且每一个实参的类型要与对应的形参类型一致。

### 形参类型

- 可选形参
- 默认形参
- 剩余参数形参

#### 可选参数

> 就是我们定义形参的时候，可以定义一个可传可不传的参数。这种参数，在定义函数的时候通过?标注。

![实例](./function/option_params.js)

#### 剩余参数的函数

> 剩余参数就是形参是一个数组，传递几个实参过来都可以直接存在形参的数组中

![实例](./function/rest_params.js)

### 函数的定义方式

#### 函数声明法

``` js
function add(n1:number,n2:number):number{
  return n1+n2
}
```

#### 函数表达式法

``` js
var add = function(n1:number,n2:number):number{
  return n1+n2
}
console.log(add(1,4))
```

#### 箭头函数

``` js
var add = (n1:number,n2:number):number=>{
  return n1+n2
}
console.log(add(1,4))
```

JavaScript就遭到了无数开发者的吐槽，甚至说javascript不适合开发大型语言，容易内存溢出。JavaScript团队意识到了这一点，在ES6中推出了let关键字。

### 声明数组的方法

``` js
let arr1:number[ ]     //声明一个数值类型的数组
let arr2:Array<string>  //声明一个字符串类型的数组

```

### 字面量赋值法

``` js
//定义一个空数组，数组容量为0
let arr1:number[] = []
//定义一个数组时，直接给数组赋值
let arr2:number[] = [1,2,3,4,5]
//定义数组 的同事给数组赋值
let arr3:Array<string> = ['wovert','微明','零壹码']
let arr4:Array<boolean> = [ true,false,false]
```

### 构造函数赋值法

``` js
let arr1:number[] = new Array()
let ara2:number[] = new Array(1,2,3,4,5)
let arr3:Array<string> = new Array('jspang','技术胖','金三胖')
let arr4:Array<boolean> = new Array(true,false,false)
```

## 元祖

> 元祖是一种特殊的数组，元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比如，你可以定义一对值分别为string和number类型的元祖

``` js
//声明一个元祖类型
let x : [string,number]
//正确的初始化
x = ['hello',10]
//错误的初始化方法
x = [10,'hello']
```

## 日期对象

### 不传递任何参数

``` js
let d:Date = new Date()
console.log(d)
```

### 传递一个整数

> 传递一个整数，这个整数代表的是距离1970-01-01 00:00:00的毫秒数（具体为什么是这个时间，小伙伴可以自己百度一下）。例如：传入参数为1000，将创建一个表示1970-01-01 00:00:01的日期对象

``` js
let d:Date = new Date(1000)
let da:Date = new Date(2000)
console.log(d)  //1970-01-01T00:00:01.000Z
console.log(da) //1970-01-01T00:00:02.000Z
```

### 传递一个字符串

> 如果传递一个表示日期的字符串，就会生成相对应的日期对象。字符串的格式常用:yyyy/MM/dd hh:mm:ss，yyyy-MM-dd hh:mm:ss，yyyy-MM-ddThh:mm:ss等

``` js
let d1:Date = new Date('2018/09/06 05:30:00')
let d2:Date = new Date('2018-09-06 05:30:00')
let d3:Date = new Date('2018-09-06T05:30:00')
console.log(d1)
console.log(d2)
console.log(d3)
```

传递表示年月日时分秒的变量

`let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);`

## 正则表达式

### 构造函数法

``` js
let reg1:RegExp = new RegExp("wovert")  //表示字符串规则里含有jspang
console.log(reg1)
let reg2:RegExp = new RegExp("wovert",'gi')
console.log(reg2)
```

### 字面量法

``` js
let reg3:RegExp = /wovert/
let reg4:RegExp = /wovert/gi
```

- test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false
- exec(string) : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null。

``` js
let reg1:RegExp =  /wovert/i
let website:string = 'wovert.com'
let result:boolean = reg1.test(website)
console.log(result)    //true

let reg1:RegExp =  /wovert/i
let website:string = 'wovert.com'
console.log(reg1.exec(website))
//[ 'wovert', index: 0, input: 'wovert.com' ]
```

## 面向对象

### 访问修饰符

- `public`:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
- `protected`:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
- `private`: 私有修饰符，只可以在类内使用private修饰的属性和行为。

### 只读属性修饰符

``` js
class Man {
  public readonly sex:string = '男'
}
var man:Man = new Man()
man.sex='女' // Error
```

### 继承和重写

``` js
class Lingyima extends Wovert{
  public interest(){
    super.interest()
    console.log('建立电商平台')
  }
}
```

## 面向对象编程-接口

### 定义接口的关键字是interface

``` js
interface Husband {
    sex:string
    interest:string
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务'}
console.log(myhusband)
```

### 可选参数的接口

``` js
interface Husband {
  sex:string
  interest:string
  maiBaoBao?:Boolean
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务',maiBaoBao:true}
console.log(myhusband)
```

### 规范函数类型接口

``` js
interface  SearchMan{
  (source:string,subString:string):boolean
}
let mySearch:SearchMan
mySearch = function(source:string,subString:string):boolean{
  let flag =source.search(subString)
  return (flag != -1)
}
console.log(mySearch('高、富、帅、德','胖')) //false
```

### 命名空间

``` js
namespace shuaiGe{
  export class Dehua{
    public name:string = '刘德华'
    talk(){
      console.log('我是帅哥刘德华')
    }
  }
}
namespace bajie{
  export class Dehua{
    public name:string = '马德华'
    talk(){
      console.log('我是二师兄马德华')
    }
  }
}
let dehua1:shuaiGe.Dehua   = new shuaiGe.Dehua()
let dehua2:shuaiGe.Dehua   = new bajie.Dehua()
dehua1.talk()
```

## 泛型

> 自定义的数据类型

## 模块



## 创建一个项目

`$ create-react-app my-app --scripts-version=react-scripts-ts`