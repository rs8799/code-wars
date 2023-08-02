function squareOrSquareRoot(array) {
  let square= array.map((item)=>{
    if(item%Math.sqrt(item)==0){
      return Math.sqrt(item)
    }else
      return Math.pow(item,2)
  }); 
  return square
}