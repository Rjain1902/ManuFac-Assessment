export function CalculateMode(obj){
  let maxKey=null;
  let maxValue=0
  for(const item in obj){
    if(maxKey==null){
      maxKey=item
      maxValue=obj[item]
    }
    else if(obj[item]>maxValue){
      maxValue=obj[item]
      maxKey=item
    }
  }
  return Number(maxKey).toFixed(3)
}
   
  