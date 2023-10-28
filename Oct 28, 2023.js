function calculateTip(amount, rating) {
  var rate = rating.toLowerCase();
  if(rate==="excellent"){
    return Math.ceil(amount*0.2)
  }else if(rate==="great"){
    return Math.ceil(amount*0.15)
  }else if(rate==="good"){
    return Math.ceil(amount*0.10)
  }else if(rate==="poor"){
    return Math.ceil(amount*0.05)
  }else if(rate==="terrible"){
    return amount*0
  }else
    return "Rating not recognised"
}