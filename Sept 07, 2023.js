function correctTail(bod, tail){  
  let splitter = bod.split("")
  if (splitter[splitter.length-1] == tail){ ;
    return true
  }
  else 
    return false
}
