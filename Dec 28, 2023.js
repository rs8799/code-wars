function capitalize(s){
  return [s.split("")
          .map((e,i)=>i%2==0?e.toUpperCase():e.toLowerCase())
          .join("")
          ,s.split("")
          .map((e,i)=>i%2!=0?e.toUpperCase():e.toLowerCase())
          .join("")];
};