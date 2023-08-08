function arrayMadness(a, b) {
  let square = a.map((item)=>item*item)
  let sumOfA = square.reduce((acc,prev) =>acc + prev)
  let cubed = b.map((item)=>item*item*item)
  let sumOfB = cubed.reduce((acc,prev) =>acc + prev)

  if(sumOfA>sumOfB){
    return true
  }else
    return false
  
}