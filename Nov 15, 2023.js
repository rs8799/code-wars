function multiples(integer,limit){
  let newArray = []
  let increment = 1
  while(increment*integer<=limit){
    newArray.push(increment*integer)
    increment ++
  }
  return newArray
}

multiples(2,5)