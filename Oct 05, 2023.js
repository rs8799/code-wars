function elevator(left, right, call){
  const distleft = Math.abs(call-left)
  const distright = Math.abs(call-right)
  
  return distleft<distright?"left":"right"
}