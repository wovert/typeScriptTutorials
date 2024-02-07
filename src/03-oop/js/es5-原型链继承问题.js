function Animal(name, age) {
  this.name = name
  this.age = age
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
  Animal.call(this, name, age) // 对象冒充继承：继承构造函数里的属性和方法，实例化子类给父类传参
}
// Person.prototype = new Animal() // 原型链实现继承
Person.prototype = Animal.prototype // 优化：原型链实现继承
var p = new Person('张三', 18) // 实例化子类时，无法给父类传参
p.work()
p.run()
