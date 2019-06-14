/**
 * @param  {string} name
 * @param  {number} age? 可选参数(必须在参数的最后位置)
 * @param  {string='BJ'} city 默认参数
 * @returns string join all params
 */
function func3(name:string, age?:number, city:string='BJ'):string {
  return age ? `${name}--${age} -- ${city}` : `${name} -- ${city}`
}

console.log(func3('wovert', 10))
console.log(func3('lingyima'))