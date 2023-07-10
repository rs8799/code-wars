function shortcut (string) {
  let splitter = string.split("")
  let newArray = []
  let vowels = []
  let removeVowel = splitter.map((element)=>{
    if(element=="a"||element=="e"||element=="i"||element=="o"||element=="u"){
      vowels.push(element)
    }else
      newArray.push(element)
  })
  return newArray.join("");
}