function fireFight(s){
  let splitter = s.split(" ")
  console.log(splitter)
  let fireOut = splitter.map((word) =>word=="Fire"? word.replace("Fire", "~~"):word)
	return fireOut.join(" ")
               

}


fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast")