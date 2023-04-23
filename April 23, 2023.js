function shortenToDate(longDate) {
  let conversion = longDate.split(",")
  let newString =conversion.pop()
  return conversion.join('')
}

shortenToDate("Friday May 2, 9am")