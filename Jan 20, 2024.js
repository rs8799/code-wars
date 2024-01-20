String.prototype.toJadenCase = function () {
  return this.split(' ').
    map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
}

//make string into array 
//each array item capitilize the first letter
//rejoin array into string.