function toCsvText(array) {
  const joinFirst = array.map((arr) =>arr.join(','))
  console.log(joinFirst)  
  return joinFirst.join('\n')                        
}

toCsvText([[ 0, 1, 2, 3, 4 ],[ 10,11,12,13,14 ],[ 20,21,22,23,24 ],[ 30,31,32,33,34 ]])