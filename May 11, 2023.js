function countBy(x, n) {
  let z = [];
  let numberToMultiplyBy = 1
  while(numberToMultiply<=n){
    let multi = x*numberToMultiply
    z.push(multi)
    numberToMultiply = numberToMultiply +1
  }
  return z;
}