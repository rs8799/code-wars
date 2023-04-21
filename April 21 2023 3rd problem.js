function getCount(str) {
  let special = (str.match(/[aeiou]/gi) || []).length;
  return special;
}


getCount("abracadabra")