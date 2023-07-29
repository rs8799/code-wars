function mergeArrays(arr1, arr2) {

  let arrNew= arr1.concat(arr2)
  let removeDup = arrNew.filter((item,index)=>arrNew.indexOf(item)===index)
    
   return removeDup.sort((a,b)=>a-b)
  
}