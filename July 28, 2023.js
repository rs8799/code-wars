function defineSuit(card) {
  let splitter = card.split("")
  if(splitter[(splitter.length-1)]=="♣"){
    return 'clubs'
  }else if(splitter[(splitter.length-1)]=="♦"){
    return 'diamonds'
  }else if(splitter[(splitter.length-1)]=="♥"){
    return "hearts"
  }else if(splitter[(splitter.length-1)]=="♠")
    return "spades"
    
}