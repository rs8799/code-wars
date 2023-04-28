function findMultiples(integer, limit) {
  const multiples =[]
  let increment = 1;
  while(increment * integer <=limit){
    multiples.push(increment * integer);
    increment++
  }
  return multiples
}
