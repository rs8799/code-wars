function oddOrEven(array) {
  let accu = array.reduce((acc,current)=>acc+current,0)
  if(array==0){
    return 'even'
  }
  return accu%2==0?"even":"odd"
}
