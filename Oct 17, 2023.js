String.prototype.digit = function() {
  if (this.length !=1) return false
  return '0123456789'.includes(this);
};