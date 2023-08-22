function doubleChar(str) {

  
  let newString = ""
  for(let i=0;i<str.length;i++){
    let splitter = str.split("")
    newString += splitter[i]+splitter[i]
    
  }
return newString
}