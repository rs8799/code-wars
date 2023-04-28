function invert(array) {
  return array.map((number) => {
    if(number>0){
      return number *= -1
    }else 
      return number /-1
  })
}