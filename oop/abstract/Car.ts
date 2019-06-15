export abstract class Car {
  public name:string

  constructor(name:string) {
    this.name = name
  }
  
  abstract drive():void

  getName():string {
    return this.name
  }
}
