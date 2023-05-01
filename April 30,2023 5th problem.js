function digitize(n) {
  let stringer = n.toString()
  let splitter= stringer.split("").reverse()
  return splitter.map((string)=>parseInt(string))
}
digitize(35231)