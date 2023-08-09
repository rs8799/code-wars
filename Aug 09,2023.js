function differenceInAges(ages){
  let newArray = []
  let sortedArray = ages.sort((a,b)=>a-b)
  let removeFirst = sortedArray.shift() 
 
  let pusher = newArray.push(removeFirst)
 
  let removeLast = sortedArray.pop()
  let pusherTwo = newArray.push(removeLast)
  let ageDifference = newArray.reduce((acc,prev)=>prev-acc)
  let pusherThree = newArray.push(ageDifference)
  return newArray
 }
 