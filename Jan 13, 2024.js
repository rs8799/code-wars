function squareDigits(num){
  let splitter = num.toString().split("")
  let realDigits = splitter.map((Number)=>Number**2)
let joiner= realDigits.join("")
let digiter= Number(joiner)
return digiter
                                }

//negative? no
//only numbers? - yes
//split number into individual numbers