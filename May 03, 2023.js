function array(string) {
  let splitter = string.split(',')
  if(splitter.length<=2){
    return null
  }else if(splitter.length>2){
    let newArray = splitter.shift()
    let lastRemove = splitter.pop()
 		return splitter.join(' ')
  }
  
}


array("1,2,4,5")