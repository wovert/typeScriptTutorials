function fun(age:number,stature?:string):string{
  let yy:string = ''
  yy = '找到了'+age+'岁'
  if(stature !=undefined){
      yy = yy + stature
  }
  return yy+'的小姐姐'
}
var r:string  =  fun(22,'大长腿')
console.log(r)