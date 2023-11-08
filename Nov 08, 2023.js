function mergeArrays(a, b) {
  let combined = a.concat(b)
  combined = new Set(combined)
  combined = Array.from(combined)
  return combined.sort((a,b)=>a-b)
}