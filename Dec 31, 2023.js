function any(arr, fun){
  return arr.some(fun)
}

//given arr - numbers strings
//fun - function cks if given function is true/false compare to arr
//arr empty ==false
//
//console.log(any([5,6,8,9,10,34],function(item){
//  return item.length > 4
//}))//should return true