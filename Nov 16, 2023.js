function sumSquares(array) {
  return array.reduce((prev,current)=>prev + current**2,0)
}