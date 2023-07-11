function capitalizeWord(word) {
  let splitter = word.split("")
  let upper = splitter[0].toUpperCase()
  splitter.splice(0,1,upper)
  console.log(splitter)
  return splitter.join("");
}