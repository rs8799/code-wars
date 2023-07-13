function divisibleBy(numbers, divisor){
  let divisable = []
  for(let i=0;i<=numbers.length;i++){
    if(numbers[i]%divisor==0){
      divisable.push(numbers[i])
    }
    
  }
  return divisable
}