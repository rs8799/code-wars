function sumTwoSmallestNumbers(numbers) {  
  const twoLowest = numbers.sort((a,b)=>a-b)
  let firstElement = twoLowest.shift()
  let secondElement = twoLowest.shift()
  console.log(firstElement)
  console.log(secondElement)
  return firstElement+secondElement

}

sumTwoSmallestNumbers([19, 5, 42, 2, 77])