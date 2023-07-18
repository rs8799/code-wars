function well(x){
  let goodCount = 0
  for(const idea of x){
    if(idea == "good") goodCount +=1
  }
  if (goodCount >2) return 'I smell a series!'
  if (goodCount >0) return 'Publish!'
  return 'Fail!'
}