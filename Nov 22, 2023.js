var hotpo = function(n){
  var c = 0;

while (n > 1) {
n = n % 2 ? 3 * n + 1 : n / 2;
c++;
}

return c;
}
