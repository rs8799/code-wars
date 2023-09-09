function weatherInfo (temp) {
  let c = convertToCelsius(temp)
  if (c > 0)
    return (c + " is above freezing temperature")
  else
    return (c + " is freezing temperature")
}

function convertToCelsius (temp) {
  let celsius = (temp - 32) * (5/9)
  return celsius
}