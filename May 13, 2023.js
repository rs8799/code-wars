function sumMix(x){
  return x.reduce((accumulator,current)=>+ current + accumulator ,0)
}