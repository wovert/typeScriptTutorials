// 接口可以继承接口
export namespace A {
  interface Animal {
    eat():void
  }
  
  interface Person extends Animal {
    work():void
  }
  
  class Programmer {
    name:string
    constructor(name:string) {
      this.name = name
    }
    coding(code:string) {
      console.log(this.name + code)
    }
  }
  
  export class Web extends Programmer implements Person {
    constructor(name:string) {
      super(name)
    }
  
    eat() {
      console.log(this.name + '喜欢吃馒头')
    }
  
    work() {
      console.log(this.name + '正在工作')
    }
  }
}