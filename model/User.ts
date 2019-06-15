import { MySQL } from './MySQL'
// import { MsSQL } from './MsSQL'

export class User {
  username:string | undefined
  password:string | undefined
}

export const UserModel = new MySQL<User>()