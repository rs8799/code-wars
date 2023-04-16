function remove (string) {
  return string.split(' ').filter(i => i.split('!').length != 2).join(" ")
} 
remove("Hi!")

.filter(i => i.split('!').length != 2).join(' ');