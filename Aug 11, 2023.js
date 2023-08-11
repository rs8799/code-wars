function stairsIn20(s){
  return 20* s.reduce((prev1,acc1)=>prev1 + acc1.reduce((prev2,acc2)=>prev2 + acc2,0),0)
  }