//Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(array){
  return array + "," + array
}

duplicate([1,2,3,4,5])