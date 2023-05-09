function fakeBin(x){
  let splitter = x.split('')
  return splitter.map((number)=>number<5?0:1).join('')
}
fakeBin('45385593107843568')