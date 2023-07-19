function whoIsPaying(name){
  let arr = []
  if(name.length>2){
    arr.push(name)
    arr.push(name[0] + name[1])
    return arr
  }else
    arr.push(name)
    return arr
}