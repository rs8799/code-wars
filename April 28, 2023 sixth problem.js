function getAverage(marks){
  let marksAdd =  marks.reduce((acc,prev) => acc+prev)
  return Math.floor(marksAdd/marks.length)
}
