function pickIt(arr){
  let odd=[],even=[];
for(let i=0;i<arr.length;i++){
  if(arr[i]%2){
     odd.push(arr[i])
  }else 
     even.push(arr[i])
  
}
  
  return [odd,even];
}