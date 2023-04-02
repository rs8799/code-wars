var cubeChecker = function(volume, side){
  if(volume <=0 || volume != side*side*side){
  return false;
  }else if(volume === side*side*side){
    return true
  }
};