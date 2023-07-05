function findDifference(a, b) {
  return Math.abs(a.reduce((acc,current)=>acc*current)-b.reduce((acc,current)=>acc*current))}