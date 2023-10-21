function twoHighest(arr) {
  const unique = [...new Set(arr)];
  const sorted = unique.sort((a,b) => (a-b)*-1);
  if(sorted.length <=2) return sorted;
  return sorted.slice(0,2)
}