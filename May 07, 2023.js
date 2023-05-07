// Sum Numbers
function sum (numbers) {
  "use strict";
  return numbers.reduce((acc,prev) => acc + prev,0);
   
};

sum([1, 5.2, 4, 0, -1])