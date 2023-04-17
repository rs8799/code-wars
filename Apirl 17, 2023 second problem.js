function converter (mpg) {
  //miles/gallon to kilomters/liter
  let mpl = (((mpg)/4.54609188)*1.609344)
  return Number(mpl.toFixed(2))
}

converter(10)