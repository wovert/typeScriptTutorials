import Person from './class/Person'
import Animal from './class/Animal'
import { DateUtil, DateUtils } from './class/DateUtil'

{
    /******************************* class ********************************/

    // 非空类型断言----！
    // 表示确定某个标识符是有值的，跳过ts在编译阶段对它的检测
    function aa(value?:string){
        //加上 ! 的意思是确保value一定是有值的
        value! && console.log(value!.length)
    }
    aa()
    aa("22")

    // 可选链操作符----?.
    // 它的作用是当对象的属性不存在时，会短路，直接返回undefined，如果存在，那么才会继续执行。

    // ?? 和 !!的作用
    // !! 将一个其他类型转换成boolean类型，类似于Boolean()
    // ?? 空值合并操作符，当操作符的左侧是null或者undefined时，返回其右侧操作数，否则返回左侧操作数

    class StringUtil {
        static trimSpace(str: string) {
            return str.replace(/\s+/g, '')
        }
    }

    const animal = new Animal('wovert')
    animal.setName('lingyima')
    console.log(animal.getInfo())


    const p = new Person('wovert', 18)
    p.setAge(20)
    p.setName('lingyima')
    console.log(p.getInfo())

    new Person('wovert', 18)
    new Person('wovert', 18)
    // 调用静态方法
    console.log(Person.getCount())
    
    // 静态方法
    Person.print()

    // 静态方法
    DateUtil.formatDate()

    // 单例模式调用
    DateUtils.getInstance().formatDate()

    const p2 = new Person('wovert', 26)
    try {
        p2.age = -180
    } catch(error: any) {
        console.log('error=', error)
    }

    p2.setName('超龄')
    console.log(p2.getInfo())

    const dataProp = Object.getOwnPropertyDescriptor(Person.prototype, 'doEat')
    console.log('dataProp=', dataProp)
    const targetMethod = dataProp!.value
    dataProp!.value = function(...args:any[]) {
        args = args.map(arg => {
            if (typeof arg === 'string') return StringUtil.trimSpace(arg)
            return arg
        })
        console.log('前置拦截...')
        console.log('args=', args)
        targetMethod.apply(this, args)
        console.log('后置拦截...')
    }
    dataProp?.value('Bob', 'How are you')

    // 绑定某个类的对象
    Object.defineProperty(Person.prototype, 'doEat', dataProp!)
    const person = new Person('wovert', 26)
    person.doEat("Ja ck  ", "  Beijing ")





}