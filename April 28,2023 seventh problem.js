function monkeyCount(n) {
  let monkeyNumberArray = []
  let counter =1
  while(counter<=n){
    monkeyNumberArray.push(counter)
    counter++
  }
  return monkeyNumberArray
}