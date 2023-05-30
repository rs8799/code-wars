function rentalCarCost(d) {
  let dailyCost = d*40
  if(d>=7){
    return dailyCost=dailyCost-50
  }else if(d>=3){
    return dailyCost=dailyCost-20
  }else
    return dailyCost
}