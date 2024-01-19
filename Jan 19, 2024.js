function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
    //convert string to array
    //sort xx into one var
    //oo into another var
    //compare lengths of each oo and xx
    