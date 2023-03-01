// Given an array, sort it using merge sort.

// dividing the array using recursive function
function  mergeSort(arr){
    // base case
    if(arr.length < 2){
        return arr;
    }

    const mid = Math.floor(arr.length /2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// helper function
function merge(leftArr, rightArr){
    const sortedArr = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        }
        else{
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort([5, 4, 2, 5, 3, 1]));  //[ 1, 2, 3, 4, 5, 5 ]
console.log(mergeSort([8, 20, -2, 4, -6]));  //[ -6, -2, 4, 8, 20 ]