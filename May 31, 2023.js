function pillars(numPill, dist, width) {
 let distInCm = dist*100
  if(numPill==1){
    return 0
  }else(numPill>1)
    return distInCm*(numPill-1)+(numPill*width)-(2*(width))
} 