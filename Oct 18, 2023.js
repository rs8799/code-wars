solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  let pTotal = ((givenMass1/molarMass1)+(givenMass2/molarMass2))*(0.082)*(temp+273.15)/volume
  return pTotal
    
      
      }