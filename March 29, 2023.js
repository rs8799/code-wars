const flip=(d, a)=>{
  if(d==='R'){
    return a.sort((a,b) => a-b)
  }else(d==='L')
    return a.sort((a,b) => b-a)
  
return 
}

console.log(flip('R', [ 13, 2, 4, 7, 93 ]))
console.log(flip('L', [1, 4, 5, 3, 5]))