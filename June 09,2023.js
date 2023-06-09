function sumArray(array) {
  if(array==null||array==[]){
    return 0
  }else(array!=0)
    let sorter =array.sort(function(a,b){return a-b})
    console.log(sorter)
    let removeMax = sorter.pop()
    let removeMin = sorter.shift()
    let sum=0
    let summer= array.forEach((number)=>{sum+=number})
    return sum
}

sumArray([ 0, 1, 6, 10, 10 ]) 