function warnTheSheep(queue) {
  let reverser = queue.reverse()
  console.log(reverser)
  const index = reverser.indexOf("wolf")
  if(index===0){
    return "Pls go away and stop eating my sheep"
  }else 
     return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
}