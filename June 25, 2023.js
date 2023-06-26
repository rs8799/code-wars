function sumMul(n,m){
  if(m<=n){
    return "INVALID"
  }
let newArray=0
  for(let i=n;i<m;i+=n){
    newArray +=i
  }
  return newArray
}