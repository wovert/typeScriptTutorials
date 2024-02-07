
{
    console.log('----------------------------函数定义----------------------')
    function info(name: string, age: number): number {
        console.log('name=', name, ' age:', age)
        return 3;
    }

    // 表达式方式
    let func = function(name: string, age: number) {
        console.log('name=', name, ' age:', age)
        return 3;
    }
    info('Alice', 20)
    func('Bob', 28)


    let  funcInfo: (name:string, age: number) => number = function(name, age) {
        console.log('name=', name, ' age:', age)
        return 3;
    }
    funcInfo("Carry", 39)

    type InfoFunType = (name:string, age: number) => number
    const infoF: InfoFunType = function(name, age) {
        console.log('name=', name, ' age:', age)
        return 3;
    }

    // rest 参数
    function test(name: string, age: number, ...rest: any): number {
        console.log('name=', name, ' age:', age, " rest:", rest)
        return 3;
    }
    test("Alice", 38, {name: 'Bob', age:39}, true, 3.14)

}

{
    console.log('----------------------------函数类型解构----------------------')
    type StuObj = {username: string, age:number, phone: string}
    
    function info(stuObj: StuObj) {
        console.log("name:", stuObj.username, " age:", stuObj.age)
        return 3
    }

    function info2({username, age}: StuObj) {
        console.log("name:", username, " age:", age)
        return 3
    }

    let stuObj: StuObj = { username: 'Alice', age: 18, phone: "1303"}
    info(stuObj)
    info2(stuObj)

}


{
    console.log('----------------------------interface和type的区别----------------------')

    // 1. interface: 只能定义对象类型或接口当名称的函数类型
    // 1. type: 可以定义任何类型，包括基础类型、联合类型、交叉类型、元组


    interface Car {brandName: string}
    interface Plane {
        No: string,
        brandName: string
    }
    
    // 定义联合类型
    type TypeVechile = Car | Plane
    let vechile: TypeVechile = {brandName: "奔驰", No: "S800"}
    console.log('vechile=', vechile)

    // 2. 接口可以extends 多个接口类或类（实现一个或多个接口），也可以继承 type
    // 2. type不可以继承

    // 3. 用type交叉类型 & 可以类型中的成员合并成一个新的 type 类型，但接口不可以交叉合并


    // 4. 接口可以合并声明，type合并编译错误
    interface Error { name: string}
    interface Error { message: string, stack?: string}

    // 接口合并
    let error:Error = {
        message: "空指针",
        name: "NullPointException"
    }
    console.log(error)


    // 元组
    type TypeVechile2 = [Car, Plane]
}



{
    console.log('----------------------------元组----------------------')

    // 1. 在定义时每个元素的类型确定
    // 2. 元素值数据类型必须是当前元素定义的类型
    // 3. 元素值的个数必须和定义时个数相同
    let salary:[string, number, number, number, number] = ["Alice", 5000 ,5000, 4000, 4000]
    console.log(salary)
}

{
    console.log('----------------------------可变元组----------------------')
    const account = [10,40,50,60,90] as const
    // account[0] = 100 // error

    let people:[string, number, string, string, string] = ['Alice', 23, '北京市', '1302039393', '一路同行，一起飞']
    console.log(people)
    // 需求变化：前面 string, number, string 固定

    // 可变元组结构：元组+数组
    let [name, age, address, ...rest]:[string, number, string, ...any[]] = ['Alice', 23, '北京市', '1302039393', 18, '一路同行，一起飞']
    console.log(name, age, address)
    console.log(rest)

    // 可变元组 tag
    let s:[string, number, string, ...any[]] = ['Alice', 23, '北京市', '1302039393', 18, '一路同行，一起飞']
    console.log(s[0])
    console.log(s[1])

    let [sname, sage, saddress, ...srest]:[sname_:string, sage_:number, saddr_:string, ...rest_:any[]] = ['s-Alice', 223, 's-北京市', 's-1302039393', 218, 's-一路同行，一起飞']
    console.log(sname, sage, saddress)
    console.log(rest)

}

// 上面的所有声明在当前文件作用域
export {}