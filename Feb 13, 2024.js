var number=function(array){
  return array.map((line,index)=>{
    return `${index +1}: ${line}`
  })
}