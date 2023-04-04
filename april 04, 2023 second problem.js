const sameCase= (a, b) => {
  if(a.toUpperCase()==a.toLowerCase()|| b.toUpperCase()==b.toLowerCase()){
    return -1
  }  else if(a==a.toLowerCase() && b==b.toLowerCase() || a==a.toUpperCase() && b==b.toUpperCase()){
    return 1;
  }
  return 0;
} 



compare(" ","Z");
