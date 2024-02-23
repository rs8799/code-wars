function isAllPossibilities(x){
  x=x.sort((a,b)=>a-b);
  const arr = [];
  for (let i=0; i<=Math.max(...x); i++){
  arr.push(i)
  }
  return x.length?arr.every((v,i)=>v===x[i])&&arr.length===x.length:false
}