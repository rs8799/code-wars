function getNumberFromString(s) {
  let matches = s.replace(/[^0-9]/g, "");
  console.log(matches)
  return +matches
}