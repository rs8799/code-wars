function past(h, m, s){
  let hourConversion = h * 3600000
  let minuteConversion = m * 60000
  let secondConversion = s * 1000
  return hourConversion + minuteConversion + secondConversion
}