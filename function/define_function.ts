// 声明函数
function func1(): void {
  console.log('func1 function is running...')  
}

// 匿名函数
let func2 = function():number {
  console.log('func2 function is running...')  
  return 100
}

func1()
func2()