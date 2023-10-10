function derive(coefficient,exponent) {
  let newNumber = coefficient*exponent
  let newExponent = exponent-1
  return `${newNumber}x^${newExponent}` 
}