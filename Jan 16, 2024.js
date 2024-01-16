function filter_list(l) {
  let filterLetters = l.filter((item)=>typeof item=="number")
  return filterLetters
 }
 
 //n is a an array with integers + strings
 //remove strings from array
 //return array with just integers