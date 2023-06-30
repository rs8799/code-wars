function powersOfTwo(n){
 
  let numbers = []
  for(let i=0;i<=n;i++){
    numbers.push(Math.pow(2,i))
  }

  return numbers
}