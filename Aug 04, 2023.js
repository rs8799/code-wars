function sumOfDifferences(arr) {
  let descendingOrder = arr.sort((a,b)=>b-a)
  let total =0
  for(let i=0;i<descendingOrder.length-1;i++){
    total += descendingOrder[i] - descendingOrder[i+1]
  }
  return total
}