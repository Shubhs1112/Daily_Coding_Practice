// Given a list of numbers below: 4, 3, 6, 4, 1

// What is the largest element in the list? → 6
// What is the 3rd largest element in the list? → 4
// Given a list of numbers, find the kth largest element in the list.

const kthLargestElement = (nums,k) => {
    const sorted = nums.sort((a,b) => a - b);
    return sorted[sorted.length - k];
}

console.log(kthLargestElement([3,2,1,5,6,4],2)); //Output 5
console.log(kthLargestElement([3,2,3,1,2,4,5,5,6],4)); //output 4
