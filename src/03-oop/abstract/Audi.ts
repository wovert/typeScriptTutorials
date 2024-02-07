import CarFile = require('./Car')
class Audi extends CarFile.Car {
  constructor (name:string) {
    super(name)
  }
  drive():void {
    console.log(this.name +'drive Audi')
  }
}

const c = new Audi('奥迪')
c.drive()