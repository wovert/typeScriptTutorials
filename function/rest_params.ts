/**
 * @param  {number[]} ...result
 * @returns number
 */
function func4(...result:number[]):number {
  const res:number = result.reduce((total:number, val:number) => {
    return total + val
  }, 0)
  return res
}

// 三点运算符
const price:Array<number> = [10, 20, 30, 40]
console.log(func4(...price))