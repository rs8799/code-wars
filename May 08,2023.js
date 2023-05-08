function findAverage(array) {
  if (array.length==0)
    return 0
    
  return (array.reduce((acc,prev) => acc+prev,0))/array.length
}

findAverage([])