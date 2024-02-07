// import AnimalFile = require('./Animal')
import Animal from './Animal'

class Person extends Animal {
  // public age:number
  _age!:number
  addr?: string // 可选参数
  other!: string // 类型推断排除 null/undefined
  static count:number = 0 // 静态成员属性
  constructor (name:string, age:number) {
    super(name) // 初始化父类构造函数
    this._age = age
    Person.count++
  }
  // 静态方法
  static getCount() {
    return Person.count
  }
  public setAge(age:number):void {
    this.age = age
  }
  public getAge():number {
    return this.age
  }
  set age(val:number) {
    if (val > 10 && val < 128) this._age = val
    else throw new Error('年龄超出范围')
  }
  get age() {
    return this._age
  }

  public getInfo():string {
    return `人类信息：name=${this.name} age=${this.age}`
  }

  doEat(who:string, where:string) {
    console.log(`who:${who}, where:${where}`)
  }
}
export default Person