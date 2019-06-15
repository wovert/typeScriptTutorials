import AnimalFile = require('./Animal')

class Person extends AnimalFile.Animal {
  public age:number
  constructor (name:string, age:number) {
    super(name) // 初始化父类构造函数
    this.age = age
  }
  public setAge(age:number):void {
    this.age = age
  }
  public getAge():number {
    return this.age
  }
  public getInfo():string {
    return `我的信息时：${this.name}--${this.age}`
  }
}

const p = new Person('wovert', 18)
console.log(p.getAge())
p.setAge(20)
console.log(p.getAge())

console.log(p.getName())
p.setName('lingyima')
console.log(p.getName())

console.log(p.getInfo())
Person.print()