/**
 * @param  {string} name
 * @param  {number} age? 可选参数(必须在参数的最后位置)
 * @returns string join all params
 */
function func3(name:string, age?:number):string {
  return age ? `${name}--${age}` : name
}

console.log(func3('wovert', 10))
console.log(func3('lingyima'))