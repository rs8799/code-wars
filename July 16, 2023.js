function multiTable(number) {
  let stringer = []
  for(let i=1;i<=10;i++){
    stringer.push(`${i} * ${number} = ${i * number}`)
  }
  return stringer.join('\n')
}