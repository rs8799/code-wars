function enough(cap, on, wait) {
  let total = on + wait
  if(cap>=total){
    return 0
  }else
    return total-cap
}