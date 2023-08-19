function arr2bin(arr){
  return arr.reduce((prev,curr)=>prev +(typeof curr == 'number'? curr:0),0).toString(2)
}