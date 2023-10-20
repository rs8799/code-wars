function generateRange(min, max, step){
  let arrayNew = []
for(let i=min;i<=max;i+=step){
  arrayNew.push(i)
}
  return arrayNew
}