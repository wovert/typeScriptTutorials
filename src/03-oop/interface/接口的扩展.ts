// 接口可以继承接口

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

class Web extends Programmer implements Person {
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

const w = new Web('wovert')
w.eat()
w.work()
w.coding('ts coding')