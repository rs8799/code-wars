function uniTotal (string) {
  return string.split("")
  .map(char => char.charCodeAt(0))
  .reduce((total,current)=>total+current,0)
}