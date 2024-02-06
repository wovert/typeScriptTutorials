
## 数据类型


- 基本类型：number/string/boolean/symbol/null/undefined
- 根类型: Object/{}
- 对象类型: Array/object/function
- 枚举: enum
- 其他特殊类型: any/unknown/never/void/tupple/可变元组
- 合成类型：联合类型/交叉类型
- 字面量数据类型：



### any&unknown

- any/unknown 可以是任何的父类，所以任何类型的变量都可以赋值给any类型或unknown类型的变量
- 可以是任何类的子类，但是 unknown不可以，所以 any 类型的变量都可以赋值给其他类型的变量
- 不能unknown类型的变量获取任何属性和方法，但是 any类型的变量可以获取任意名称的属性和任意名称的方法