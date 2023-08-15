function eachCons(array, n) {
  const results =[]
  for(let i=0;i<array.length;i++){
    let smallArr = []
    for(let j=0;j<n;j++){
      let index = i+j
      if(index >= array.length) return results
    smallArr.push(array[index])
     }
    results.push(smallArr)
  }
	return results;
}