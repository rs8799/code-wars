function howManySmaller(arr,n){
  return arr.map(item=>Number(item.toFixed(2))).filter(num => num <n).length
}