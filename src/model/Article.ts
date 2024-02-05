import { MySQL } from './MySQL'
// import { MsSQL } from './MsSQL'

export class Article {
  title:string | undefined
  desc:string | undefined
  status:number | undefined
  constructor (params: {
    title: string | undefined,
    desc: string | undefined,
    status?:number | undefined
  }) {
    this.title = params.title
    this.desc = params.desc
    this.status = params.status
  }
}

export const ArticleModel = new MySQL<Article>()
