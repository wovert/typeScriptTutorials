class Animal {
  name:string // 省略 public 关键词
  constructor (name:string) {
    this.name = name
  }
  static print():void {
    console.log('Animal static method')
  }
  public setName(name:string):void {
    this.name = name
  }
  public getName():string {
    return this.name
  }
  public getInfo():string {
    return `动物信息：name=${this.name}`
  }
}

export default Animal