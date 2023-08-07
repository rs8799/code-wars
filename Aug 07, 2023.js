var findAverage = function (nums) {
  let adding = nums.reduce((acc,prev)=>acc+prev,0)
  return adding/nums.length
}