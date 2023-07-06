function howMuchILoveYou(nbPetals) {
  let loveArray = ["I love you","a little","a lot","passionately","madly","not at all"]
     
  for(let i=0;i<=nbPetals;i++){
     loveArray.push(loveArray[i]);
   }
   return loveArray[nbPetals-1]; 
  
  }
  