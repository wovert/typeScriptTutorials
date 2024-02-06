
{
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
// 上面的所有声明在当前文件作用域
export {}