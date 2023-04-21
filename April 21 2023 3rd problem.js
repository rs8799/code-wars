function getCount(str) {
/*   let vowels = /[a]/;
 */  let special = str.match(/[aeiou]/gi).length
  console.log(special)
  return special;
}

getCount("abracadabra")