function abbrevName(name){
  let newString =  name.split(" ").map(word => word.charAt(0)).join(".")
  return newString.toUpperCase()
}

abbrevName("Sam Harris")