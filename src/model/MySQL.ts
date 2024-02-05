import { DBI } from './DBI'

// 定义mysql数据库类
export class MySQL<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info)
    return true
  } 
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    const list = [
      {
        title: 'xxxxx',
        desc: 'xxxx'
      },
      {
        title: 'xxxxx',
        desc: 'xxxx'
      }
    ]
    return list
  }
}