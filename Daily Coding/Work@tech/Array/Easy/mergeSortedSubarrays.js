// Consider an array that is divided into two parts and both of the parts are sorted individually. 
// Given the mentioned array and the end index of the first part, merge them to create a sorted array. 
// Update the same array with the merged elements. You can use extra auxiliary space.

function mergeSortedSubarrays(arr, index){
    const leftArr = arr.slice(0,index);
    const rightArr = arr.slice(index);
    
}

mergeSortedSubarrays([1, 3, 5, 7, 9, 11, 0, 4, 6, 8],5)