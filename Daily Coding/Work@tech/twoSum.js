// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
    let newArr = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if(i==j){
                continue;
            }
            else if(nums[i] + nums[j] === target ){
                 newArr.push(i);
                 newArr.push(j);
            }        
        }
    }
    console.log(newArr);
}

twoSum([2,7,11,15],9);          //[0,1]
twoSum([3,2,4,9,9],7);          //[0,2]
twoSum([3,3],6);                //[0,1]
