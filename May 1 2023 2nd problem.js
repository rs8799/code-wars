function disemvowel(str) {
  let vowel =["a","e","i","o","u"]
  let newStr = "";
  
  for(let i=0;i<str.length;i++){
    if(!vowel.includes(str[i].toLowerCase())){
      newStr+=str[i];
    }
  }

 return newStr
}

disemvowel("This website is for losers LOL!")