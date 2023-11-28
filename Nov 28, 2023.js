function cutIt(arr){
  const newString= arr.reduce(function(a,b){
    return a.length<b.length?a:b
  })
  console.log(newString.length)
  return arr.map((item)=>item.slice(0,newString.length))
}