function cumulativeSum(arr){
    let newArr = [];
    let n;
    for(let i=0; i<arr.length; i++){
         if(i==0){
             newArr.push(arr[i]);
         }
         else{
             n = arr[i]+arr[i-1];
             newArr.push(n);
             arr[i]= n;
         }
    }
    console.log(newArr);
}

cumulativeSum([1,2,3,4]);    // [ 1, 3, 6, 10 ]
cumulativeSum([1,2,3,4,5]); //[ 1, 3, 6, 10, 15 ]

