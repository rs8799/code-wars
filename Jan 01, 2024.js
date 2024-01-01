function sc(floor){
  if(floor <= 1) return "";
  
  return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}
//each foor Aa not inlcudeing current floor
//floor pa
////final Aa on ground
//need to return a string that corersponds to # of floors
//>6 floors would not have Aa after pa
  