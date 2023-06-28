function isPalindrome(x) {
  let lower = x.toLowerCase()
  let splitter = x.split("")
let reverseName = splitter.reverse()
let joiner = reverseName.join("").toLowerCase()
console.log(joiner)
if(joiner==lower){
  return true
}else if(joiner !=lower)
  return false

}