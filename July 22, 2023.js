function remove (string) {
  let splitter = string.split("")
  const lastItem = string[string.length-1]

  if(lastItem=="!"){
    splitter.pop("!")
  }
 
    return splitter.join("");
  console.log(splitter)
}