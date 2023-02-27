// Given an array, sort it using quicksort.

function quickSort(arr){
    // Base case
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    // Sorting the elements
    for(let i=0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }
        else{
            rightArr.push(arr[i]);
        }
    }

    // recursive call 
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([8, 20, -2, 4, -6]));
console.log(quickSort([850, 100, 4, 2, 5, 3, 1]));