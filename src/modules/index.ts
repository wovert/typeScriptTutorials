// 操作用户表：定义一个Users类和数据表做映射
import { User, UserModel } from '../model/User'
import { Article, ArticleModel } from '../model/Article'

const u = new User()
u.username = 'wovert'
u.password = '123456'
UserModel.add(u)

const a = new Article({
  title: '标题',
  desc: '描述'
})
const d = ArticleModel.get(1)
console.log(d)