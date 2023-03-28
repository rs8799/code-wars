/* function howMuchWater(water, load, clothes){
  
  if(clothes > 2 * load){
    console.log('Too much clothes')
  }else if(clothes < load){
    console.log('No enough clothes')
  }else{
    let waterNeeded = (water * 1.1 **(clothes - load)).toFixed(2)
    return Number(waterNeeded)
  }
} */

howMuchWater(50,15,29)


howMuchWater = (water, load, clothes) =>clothes < load ? 'Not enough clothes': clothes > 2 * load ? 'Too much clothes': (water * 1.1 **(clothes - load)).toFixed(2)
