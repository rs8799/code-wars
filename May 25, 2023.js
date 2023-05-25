function betterThanAverage(classPoints, yourPoints){
  let averageCalc = classPoints.reduce((number,previous)=>number + previous,0)
  
  return(averageCalc/classPoints.length)<=yourPoints?true:false
}
