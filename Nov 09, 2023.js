function remove (string) {
  let splitter = string.split("")
  let newArray = []
  for(let i=0;i<splitter.length;i++){
    if(splitter[i]!="!"){
       newArray.push(splitter[i])
       }
  }
  return newArray.join("") +"!"  
}