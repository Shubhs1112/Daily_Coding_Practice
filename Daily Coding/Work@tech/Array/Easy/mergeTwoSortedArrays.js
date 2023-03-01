// Given two sorted arrays A and B, find the merged sorted array C by merging A and B.

function mergeTwoSortedArrays(arr1,arr2){
    let result = [];
    while(arr1.length && arr2.length){
        const next = (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift();
        result.push(next);
    }

    if(arr1.length){
        result = result.concat(arr1);
    }
    else if(arr2.length){
        result = result.concat(arr2);
    }
    console.log(result);
}

mergeTwoSortedArrays([1, 2, 3, 4, 4],[2, 4, 5, 5]);   //[1, 2, 2, 3, 4, 4, 4, 5, 5]
mergeTwoSortedArrays([ 10, 13,21, 49, 54],[2, 4, 7, 9]); // [2,  4,  7,  9, 10, 13, 21, 49, 54]