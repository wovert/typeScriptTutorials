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
 * 对象冒充继承
 */
function Web() {
  Animal.call(this) // 对象冒充实现继承
}

var w = new Web()
w.run() // 对象冒充可以继承构造函数里面的属性和方法
// w.work() // 对象冒充不能继承原型链的属性和方法