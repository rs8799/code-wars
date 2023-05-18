function nameShuffler(str){
  let splitter=str.split(" ")
  console.log(splitter)
  let rev = splitter.reverse()
  console.log(rev)
  return rev.join(" ")
}