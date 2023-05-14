function arrayPlusArray(arr1, arr2) {
  let sum1 = arr1.reduce((accumulator,previous) => accumulator + previous,0)
  let sum2 = arr2.reduce((accumulator,previous) => accumulator + previous,0)
  return sum1 + sum2; 
}