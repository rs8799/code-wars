function highAndLow(numbers){
  let splitter=numbers.split(" ")
  console.log(splitter)
  let sorter = splitter.sort((a,b)=>a-b)
  console.log(sorter)
 
 for(let i=0;i<splitter.length;i++){
   if(sorter.length===1){
     return `${sorter[0]} ${sorter[0]}`
   }else if(sorter.length>1){
     return `${sorter[sorter.length-1]} ${sorter[0]}`
   }
 }
}