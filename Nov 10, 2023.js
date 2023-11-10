function isPythagoreanTriple(integers) {
  console.log(integers)
  return true?integers[0]**2+integers[1]**2===integers[2]**2 || integers[1]**2+integers[2]**2===integers[0]**2 || integers[0]**2+integers[2]**2===integers[1]**2  : false
}