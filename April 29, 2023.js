function countPositivesSumNegatives(input) {
  if(input === null) return []
  if(input.filter(n => n!=0).length == 0) return []

    let positives = 0
    let negatives = 0
    for(const x of input){
      if(x>0) positives +=1
      if(x<0) negatives +=x
    }
  return [positives,negatives]
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])