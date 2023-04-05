function periodIsLate(last, today, cycleLength) {
  let dayToMilliseconds = (today.getTime()- last.getTime())/86400000
  if(dayToMilliseconds > cycleLength){
    return true
  }
  return false;
}