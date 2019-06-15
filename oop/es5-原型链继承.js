function Animal() {
  this.name = 'wovert'
  this.age = 18
  this.run = function() {
    console.log(this.name + '在运动')
  }
}

Animal.prototype.gender = 'male'
Animal.prototype.work = function() {
  console.log(this.name + '在工作')
}

/***************************
 * 原型链实现继承：原型链+对象冒充继承
 */

function Person(name, age) {

}
Person.prototype = new Animal() // 原型链实现继承
var p = new Person('张三', 18)
p.work() // 原型链实现继承：继承构造函数的属性和方法，继承原型链上属性和方法