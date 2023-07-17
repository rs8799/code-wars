function stringy(size) {
let stringer = []
for(let i=1;i<=size;i++){
  if(i%2==0){
    stringer.push('0')
  }else if(i%2!=0)
    stringer.push('1')
}
  
  return stringer.join('')
}