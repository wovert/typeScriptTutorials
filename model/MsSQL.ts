import { DBI } from './DBI'

export class MsSQL<T> implements DBI<T> {
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
    throw new Error("Method not implemented.");
  }
}

