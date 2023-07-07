export function CalculateMedian(arr){
    let length=arr.length
    let index;
    if(length%2!==0){
        index=(length-1)/2
        return Math.round(arr[index]*1000)/1000
    }
    else{
        let value= ((arr[length/2] + arr[(length/2)-1])/2)
        // return Math.round(value * 100) / 100 
        return Math.round(value*1000)/1000
    }
}