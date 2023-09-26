function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return true? name=="Santa Claus"&&password=="Ho Ho Ho!":false
};