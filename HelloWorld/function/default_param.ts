function fun2(age:number=18,stature:string='大胸'):string{
  let yy:string = ''
  yy = '找到了'+age+'岁'
  if(stature !=undefined){
      yy = yy + stature
  }
  return yy+'的小姐姐'
}
var r:string  =  fun2()
console.log(r) // 找到了18岁大胸的小姐姐