var humanYearsCatYearsDogYears = function(humanYears) {
  let catAge=0;
  let dogAge=0;
    if(humanYears===1){
      catAge =15;
      dogAge =15;
    }else if(humanYears===2){
      catAge =24;
      dogAge =24;
    }else if(humanYears>=3){
      catAge = 4*(humanYears-2) + 24 
      dogAge= 5*(humanYears-2) + 24
    }
  
  return [humanYears,catAge,dogAge]
}
