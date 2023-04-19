function countSheeps(arrayOfSheep) {
  let numOfSheep = 0;
  for(let i=0;i<arrayOfSheep.length;i++){
  if(arrayOfSheep[i]==true){
    numOfSheep=numOfSheep + 1
  }else if(arrayOfSheep[i]==false)
    numOfSheep= numOfSheep +0 
  }
  return numOfSheep
}
countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true])